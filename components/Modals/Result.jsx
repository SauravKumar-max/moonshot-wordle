import React from "react";
import { useGame } from "@/context/game.context";
import { Icons } from "../Icons";

export function Result() {
  const { word, result, setResult, restartGame } = useGame();

  function closeResultModal() {
    setResult({ won: false, show: false });
  }

  return (
    <div className="bg-white">
      <div
        className="fixed inset-0 z-10 w-full h-full bg-gray-400 opacity-50"
        onClick={closeResultModal}
      ></div>
      <div className="overflow-auto w-[95%] max-w-lg h-auto max-h-[90%] fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded">
        <div className="flex items-center justify-between">
          <span></span>
          <h3 className="text-center font-bold text-lg ml-4">
            {result.won ? "You Won" : "You Lost"}
          </h3>
          <button type="button" onClick={closeResultModal} className="text-end">
            <Icons name="close" className={"h-5 w-5"} />
          </button>
        </div>
        <div className="text-sm text-gray-900 flex flex-col gap-2 mt-2">
          <p className="text-center font-bold">The Word was:</p>
          <div className="border border-gray-400 px-4 py-2 mx-auto text-xl font-bold bg-sky-200">
            {word.toUpperCase()}
          </div>
          <button
            type="button"
            className="w-fit mx-auto mb-4 mt-2 rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
            onClick={restartGame}
          >
            {result.won ? "Play Game" : "Restart"}
          </button>
        </div>
      </div>
    </div>
  );
}
