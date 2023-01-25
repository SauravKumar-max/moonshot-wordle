import { createContext, useCallback, useContext, useState } from "react";
import { getGuessList } from "@/utils/guessList";
import { getKeys, getKeyStatus } from "@/utils/keyboard";
import { data } from "@/utils/data";
import { toast } from "react-toastify";
import {
  getCurrentBox,
  getCurrentRow,
  getOccurrences,
  getRandomWord,
  guessedWord,
} from "@/utils/game";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const guessList = getGuessList(6);
  const keysList = getKeys();
  const randomWord = getRandomWord(data);
  const [word, setWord] = useState(randomWord);
  const [wordList, setWordList] = useState(guessList);
  const [keys, setKeys] = useState(keysList);
  const [showRules, setShowRules] = useState(true);
  const [result, setResult] = useState({ won: false, show: false });

  const onLetterClick = useCallback(
    (letter) => {
      const currentRow = getCurrentRow(wordList);
      const currentBox = getCurrentBox(wordList, currentRow);

      if (currentBox === -1) return;

      const list = [...wordList];
      list[currentRow].children[currentBox].value = letter;
      setWordList(list);
    },
    [setWordList, wordList]
  );

  const onRemoveClick = useCallback(() => {
    const currentRow = getCurrentRow(wordList);
    const currentBox = getCurrentBox(wordList, currentRow);

    const list = [...wordList];
    if (currentBox !== -1) {
      if (currentBox !== 0) {
        list[currentRow].children[currentBox - 1].value = "";
      }
    } else {
      const lastIndex = list[currentRow].children.length - 1;
      list[currentRow].children[lastIndex].value = "";
    }

    setWordList(list);
  }, [setWordList, wordList]);

  const onEnterClick = useCallback(() => {
    const currentRow = getCurrentRow(wordList);
    const currentBox = getCurrentBox(wordList, currentRow);
    const list = [...wordList];
    const alphabets = [...keys];
    const userWord = guessedWord(list, currentRow);

    if (currentBox === -1) {
      list[currentRow].guessed = true;
      list[currentRow].children = list[currentRow].children.map(
        (item, index) => {
          const wordIndex = word.toUpperCase().indexOf(item.value);
          const { keyIndex, keyStatus } = getKeyStatus(keys, item.value);

          // GREEN
          if (word[index].toUpperCase() === item.value.toUpperCase()) {
            alphabets[keyIndex].status = "correct";
            return { ...item, status: "correct" };
          }

          const subStrWord = userWord.substring(index, 5);
          const occurrenceInUser = getOccurrences(subStrWord, item.value);
          const occurrenceInWord = getOccurrences(word, item.value);

          // GRAY
          if (wordIndex === -1 || occurrenceInUser > occurrenceInWord) {
            if (keyStatus === "guessing") {
              alphabets[keyIndex].status = "absent";
            }
            return { ...item, status: "absent" };
          }

          // YELLOW
          if (wordIndex !== index) {
            if (keyStatus !== "correct") {
              alphabets[keyIndex].status = "present";
            }
            return { ...item, status: "present" };
          }
          return item;
        }
      );

      if (userWord.toUpperCase() === word.toUpperCase()) {
        toast.success("You Won", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setTimeout(() => setResult({ won: true, show: true }), 1000);
      }
    } else {
      return toast.error("Please fill a 5 letter word", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (
      currentRow === wordList.length - 1 &&
      userWord.toUpperCase() !== word.toUpperCase()
    ) {
      toast.error("You Lost", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => setResult({ won: false, show: true }), 1000);
    }

    setKeys(alphabets);
    setWordList(list);
  }, [keys, setKeys, setWordList, word, wordList]);

  function restartGame() {
    const guessList = getGuessList(6);
    const keysList = getKeys();
    const randomWord = getRandomWord(data);
    setWord(randomWord);
    setWordList(guessList);
    setKeys(keysList);
    setResult({ won: false, show: false });
  }

  return (
    <GameContext.Provider
      value={{
        word,
        setWord,
        result,
        setResult,
        keys,
        setKeys,
        wordList,
        setWordList,
        showRules,
        setShowRules,
        onLetterClick,
        onRemoveClick,
        onEnterClick,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
1;
export function useGame() {
  return useContext(GameContext);
}
