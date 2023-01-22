import React from "react";
import { KeyBoard } from "./KeyBoard";
import { WordBoxes } from "./WordBoxes";

export default function GamePanel() {
  return (
    <div>
      <WordBoxes />
      <KeyBoard />
    </div>
  );
}
