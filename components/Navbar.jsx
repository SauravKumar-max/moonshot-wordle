import React, { useState } from "react";
import { Icons } from "./Icons";
import { RulesModal } from "./Modals/Rules";
import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
  const [showRules, setShowRules] = useState(true);

  function toggleRulesModal() {
    setShowRules((show) => !show);
  }

  return (
    <>
      {showRules && <RulesModal closeRulesModal={toggleRulesModal} />}
      <nav className="sticky top-0 p-3 left-0 w-full text-black dark:text-white border-b bg-sky-200 dark:bg-slate-900">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <button type="button" onClick={toggleRulesModal}>
            <Icons name={"info"} className="w-5 h-5 stroke-2" />
          </button>
          <h1 className="text-2xl font-bold">Wordle</h1>
          <div>
            <ThemeBtn />
          </div>
        </div>
      </nav>
    </>
  );
}
