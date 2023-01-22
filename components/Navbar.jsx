import React from "react";
import { Icons } from "./Icons";
import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 p-3 left-0 w-full text-black dark:text-white border-b bg-sky-200 dark:bg-slate-900">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <div>
          <Icons name={"info"} className="w-6 h-6 stroke-2" />
        </div>
        <h1 className="text-2xl font-bold">Wordle</h1>
        <div>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}
