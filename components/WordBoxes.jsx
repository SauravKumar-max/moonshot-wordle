import React, { useCallback, useEffect, useState } from "react";
import { useGame } from "@/context/game.context";

export function WordBoxes() {
  const { wordList } = useGame();
  const classNames = (...className) => className.filter(Boolean).join(" ");

  return (
    <div className="mx-auto w-fit flex flex-col gap-1 my-4">
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
                "dark:text-white w-14 h-14 flex items-center justify-center  rounded-sm text-2xl font-bold"
              )}
            >
              {child.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
