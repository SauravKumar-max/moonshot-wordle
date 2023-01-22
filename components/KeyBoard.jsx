import React, { useCallback, useEffect } from "react";
import { useGame } from "@/context/game.context";
import { Icons } from "./Icons";
import { firstRow, keyStatus, secondRow, thirdRow } from "@/utils/keyboard";

export function KeyBoard() {
  const word = "GUEST";
  const { keys, wordList, onLetterClick, onRemoveClick, onEnterClick } =
    useGame();
  const classNames = (...className) => className.filter(Boolean).join(" ");

  const onKeyPressFunction = useCallback(
    (event) => {
      const keyCode = event.keyCode;
      if ((keyCode > 64 && keyCode < 91) || keyCode === 8 || keyCode === 13) {
        const key = event.key.toUpperCase();
        const currentRow = wordList.findIndex((item) => item.guessed === false);

        if (currentRow == -1) {
          return;
        }

        const currentBox = wordList[currentRow].children.findIndex(
          (item) => item.value === ""
        );

        if (keyCode !== 13) {
          if (currentBox !== -1) {
            if (keyCode === 8) {
              if (currentBox !== 0) {
                onRemoveClick();
              }
            } else {
              onLetterClick(key);
            }
          } else {
            if (keyCode === 8) {
              onRemoveClick();
            }
          }
        } else {
          onEnterClick();
        }
      }
    },
    [onEnterClick, onLetterClick, onRemoveClick, wordList]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressFunction, false);

    return () =>
      document.removeEventListener("keydown", onKeyPressFunction, false);
  }, [onKeyPressFunction]);

  return (
    <div className="mx-auto mt-2">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2">
          {firstRow.map((letter) => {
            const { letterStatus } = keyStatus(keys, letter);
            return (
              <button
                key={letter}
                type="button"
                className={classNames(
                  letterStatus === "present" && "bg-yellow-500 text-white",
                  letterStatus === "absent" && "bg-gray-400 text-white",
                  letterStatus === "correct" && "bg-green-500 text-white",
                  letterStatus === "guessing" &&
                    "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                  "w-10 h-12 text-sm font-semibold rounded-sm"
                )}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          {secondRow.map((letter) => {
            const { letterStatus } = keyStatus(keys, letter);
            return (
              <button
                key={letter}
                type="button"
                className={classNames(
                  letterStatus === "present" && "bg-yellow-500 text-white",
                  letterStatus === "absent" && "bg-gray-400 text-white",
                  letterStatus === "correct" && "bg-green-500 text-white",
                  letterStatus === "guessing" &&
                    "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                  "w-10 h-12 text-sm font-semibold rounded-sm"
                )}
                onClick={() => onLetterClick(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-16 h-12 text-sm font-semibold hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400 rounded-sm"
            onClick={onEnterClick}
          >
            Enter
          </button>
          <div className="flex items-center gap-2">
            {thirdRow.map((letter) => {
              const { letterStatus } = keyStatus(keys, letter);
              return (
                <button
                  key={letter}
                  type="button"
                  className={classNames(
                    letterStatus === "present" && "bg-yellow-500 text-white",
                    letterStatus === "absent" && "bg-gray-400 text-white",
                    letterStatus === "correct" && "bg-green-500 text-white",
                    letterStatus === "guessing" &&
                      "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                    "w-10 h-12 text-sm font-semibold rounded-sm"
                  )}
                  onClick={() => onLetterClick(letter)}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="w-16 h-12 text-sm hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400 rounded-sm flex items-center justify-center"
            onClick={onRemoveClick}
          >
            <Icons name="backspace" className={"h-5 w-5 stroke-2"} />
          </button>
        </div>
      </div>
    </div>
  );
}
