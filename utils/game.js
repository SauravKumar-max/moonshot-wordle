export function getCurrentRow(list) {
  return list.findIndex((item) => item.guessed === false);
}

export function getCurrentBox(list, currentRow) {
  return list[currentRow].children.findIndex((item) => item.value === "");
}

export function guessedWord(list, currentRow) {
  return list[currentRow].children.map((item) => item.value).join("");
}
