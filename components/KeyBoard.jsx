import React from "react";
import { useGame } from "@/context/game.context";
import { Icons } from "./Icons";
import { firstRow, getKeyStatus, secondRow, thirdRow } from "@/utils/keyboard";

export function KeyBoard() {
  const { keys, onLetterClick, onRemoveClick, onEnterClick } = useGame();
  const classNames = (...className) => className.filter(Boolean).join(" ");

  return (
    <div className="mx-auto mt-2">
      <div className="flex flex-col sm:gap-2 gap-1 items-center">
        <div className="flex items-center sm:gap-2 gap-1">
          {firstRow.map((letter) => {
            const { keyStatus } = getKeyStatus(keys, letter);
            return (
              <button
                key={letter}
                type="button"
                className={classNames(
                  keyStatus === "present" && "bg-yellow-500 text-white",
                  keyStatus === "absent" &&
                    "bg-gray-400 dark:bg-gray-600 text-white",
                  keyStatus === "correct" && "bg-green-500 text-white",
                  keyStatus === "guessing" &&
                    "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                  "sm:w-10 sm:h-12 w-6 h-8 sm:text-sm text-xs font-semibold rounded-sm"
                )}
                onClick={() => onLetterClick(letter)}
                onFocus={(e) => e.target.blur()}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="flex items-center sm:gap-2 gap-1">
          {secondRow.map((letter) => {
            const { keyStatus } = getKeyStatus(keys, letter);
            return (
              <button
                key={letter}
                type="button"
                className={classNames(
                  keyStatus === "present" && "bg-yellow-500 text-white",
                  keyStatus === "absent" &&
                    "bg-gray-400 dark:bg-gray-600 text-white",
                  keyStatus === "correct" && "bg-green-500 text-white",
                  keyStatus === "guessing" &&
                    "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                  "sm:w-10 sm:h-12 w-6 h-8 sm:text-sm text-xs font-semibold rounded-sm"
                )}
                onClick={() => onLetterClick(letter)}
                onFocus={(e) => e.target.blur()}
              >
                {letter}
              </button>
            );
          })}
        </div>
        <div className="flex items-center sm:gap-2 gap-1">
          <button
            type="button"
            className="sm:w-16 sm:h-12 w-12 h-8 sm:text-sm text-xs font-semibold hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400 rounded-sm"
            onClick={onEnterClick}
            onFocus={(e) => e.target.blur()}
          >
            Enter
          </button>
          <div className="flex items-center sm:gap-2 gap-1">
            {thirdRow.map((letter) => {
              const { keyStatus } = getKeyStatus(keys, letter);
              return (
                <button
                  key={letter}
                  type="button"
                  className={classNames(
                    keyStatus === "present" && "bg-yellow-500 text-white",
                    keyStatus === "absent" &&
                      "bg-gray-400 dark:bg-gray-600 text-white",
                    keyStatus === "correct" && "bg-green-500 text-white",
                    keyStatus === "guessing" &&
                      "hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400",
                    "sm:w-10 sm:h-12 w-6 h-8 sm:text-sm text-xs font-semibold rounded-sm"
                  )}
                  onClick={() => onLetterClick(letter)}
                  onFocus={(e) => e.target.blur()}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="sm:w-16 sm:h-12 w-8 h-8 sm:text-sm text-xs hover:bg-gray-400 dark:hover:bg-gray-300 bg-gray-300 dark:bg-gray-400 rounded-sm flex items-center justify-center"
            onClick={onRemoveClick}
            onFocus={(e) => e.target.blur()}
          >
            <Icons
              name="backspace"
              className={"sm:h-5 sm:w-5 w-4 h-4 stroke-2"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
