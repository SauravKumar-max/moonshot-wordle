import Link from "next/link";
import React from "react";
import ThemeBtn from "./ThemeBtn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 p-3 left-0 w-full text-black dark:text-white bg-sky-300 dark:bg-slate-900">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Wordle
        </Link>
        <div>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}
