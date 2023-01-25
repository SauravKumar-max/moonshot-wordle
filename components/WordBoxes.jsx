import React, { useCallback, useEffect } from "react";
import { useGame } from "@/context/game.context";
import { Result } from "./Modals/Result";

export function WordBoxes() {
  const classNames = (...className) => className.filter(Boolean).join(" ");
  const {
    showRules,
    result,
    wordList,
    onRemoveClick,
    onLetterClick,
    onEnterClick,
    restartGame,
  } = useGame();

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
    if (result.show || showRules) {
      document.removeEventListener("keydown", onKeyPressFunction, false);
    } else {
      document.addEventListener("keydown", onKeyPressFunction, false);
    }

    return () =>
      document.removeEventListener("keydown", onKeyPressFunction, false);
  }, [onKeyPressFunction, result.show, showRules]);

  return (
    <>
      {result.show && <Result />}

      <div className="mx-auto w-fit flex flex-col gap-1 mt-4">
        {wordList.map((item, index) => (
          <div key={index + "parent"} className="flex gap-1">
            {item.children.map((child, childIdx) => (
              <div
                key={childIdx + index + "child"}
                className={classNames(
                  child.status === "present" && "bg-yellow-500 text-white",
                  child.status === "absent" && "bg-gray-400 text-white",
                  child.status === "correct" && "bg-green-500 text-white",
                  child.status === "guessing" &&
                    "bg-transparent border-2 border-gray-300",
                  "dark:text-white sm:w-14 sm:h-14 w-12 h-12 flex items-center justify-center  rounded-sm text-2xl font-bold"
                )}
              >
                {child.value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto w-fit mt-2">
        <button
          type="button"
          className="text-gray-700 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-gray-100 hover:underline"
          onClick={restartGame}
          onFocus={(e) => e.target.blur()}
        >
          Reset
        </button>
      </div>
    </>
  );
}
