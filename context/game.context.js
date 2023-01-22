import { getCurrentBox, getCurrentRow, guessedWord } from "@/utils/game";
import { getGuessList } from "@/utils/guessList";
import { getKeys, keyStatus } from "@/utils/keyboard";
import { createContext, useCallback, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const word = "GUEST";
  const guessList = getGuessList(6);
  const keysList = getKeys();
  const [wordList, setWordList] = useState(guessList);
  const [keys, setKeys] = useState(keysList);

  const onLetterClick = useCallback(
    (letter) => {
      const currentRow = getCurrentRow(wordList);
      const currentBox = getCurrentBox(wordList, currentRow);

      if (currentBox === -1) return;

      const list = [...wordList];
      list[currentRow].children[currentBox].value = letter;
      setWordList(list);
    },
    [wordList]
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
  }, [wordList]);

  const onEnterClick = useCallback(() => {
    const currentRow = getCurrentRow(wordList);
    const currentBox = getCurrentBox(wordList, currentRow);
    const list = [...wordList];
    const alphabets = [...keys];
    if (currentBox === -1) {
      list[currentRow].guessed = true;
      list[currentRow].children = list[currentRow].children.map(
        (item, index) => {
          const isPresent = word.toUpperCase().indexOf(item.value);
          const { keyIndex, letterStatus } = keyStatus(keys, item.value);
          if (isPresent === -1) {
            alphabets[keyIndex].status = "absent";
            return { ...item, status: "absent" };
          }
          if (isPresent === index) {
            alphabets[keyIndex].status = "correct";
            return { ...item, status: "correct" };
          }
          if (isPresent !== index) {
            if (letterStatus !== "correct") {
              alphabets[keyIndex].status = "present";
            }
            return { ...item, status: "present" };
          }
          return item;
        }
      );

      const userWord = guessedWord(list, currentRow);
      if (userWord.toUpperCase() === word.toUpperCase()) {
        console.log("WINNER");
      }
    } else {
      console.log("NOT SO EARLY");
    }
    setKeys(alphabets);
    setWordList(list);
  }, [keys, wordList]);

  return (
    <GameContext.Provider
      value={{
        keys,
        wordList,
        setWordList,
        onLetterClick,
        onRemoveClick,
        onEnterClick,
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
