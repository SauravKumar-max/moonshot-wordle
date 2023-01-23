import React from "react";
import { Icons } from "../Icons";

export function RulesModal({ closeRulesModal }) {
  return (
    <div className="bg-white">
      <div
        className="fixed inset-0 z-10 w-full h-full bg-gray-400 opacity-50"
        onClick={closeRulesModal}
      ></div>
      <div className="overflow-auto w-[95%] max-w-xl h-auto max-h-[90%] fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded">
        <div className="flex items-center justify-between">
          <span></span>
          <h3 className="text-center font-bold text-base">How To Play</h3>
          <button type="button" onClick={closeRulesModal} className="text-end">
            <Icons name="close" className={"h-5 w-5"} />
          </button>
        </div>
        <div className="text-sm text-gray-900 flex flex-col gap-2 mt-2">
          <p>
            Guess the <span className="font-bold">WORDLE</span> in 6 tries.
          </p>
          <p>
            Each guess must be a valid 5 letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>
        <div className="mt-2 border-t border-gray-300">
          <p className="font-bold py-3">Examples</p>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 font-bold text-2xl bg-green-500 text-white flex items-center justify-center">
              W
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              E
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              A
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              R
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              Y
            </div>
          </div>
          <p className="text-sm my-3">
            The letter <span>W</span> is in the word and in the correct spot.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              P
            </div>
            <div className="w-9 h-9 font-bold text-2xl bg-yellow-500 text-white flex items-center justify-center">
              I
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              L
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              L
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              S
            </div>
          </div>
          <p className="text-sm my-3">
            The letter <span>I</span> is in the word but in the wrong spot.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              V
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              A
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              G
            </div>
            <div className="w-9 h-9 font-bold text-2xl bg-gray-400 text-white flex items-center justify-center">
              U
            </div>
            <div className="w-9 h-9 font-bold text-2xl border border-gray-800 flex items-center justify-center">
              E
            </div>
          </div>
          <p className="text-sm my-3">
            The letter <span>U</span> is not in the word in any spot.
          </p>
        </div>
      </div>
    </div>
  );
}
