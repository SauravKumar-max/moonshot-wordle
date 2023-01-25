export function getCurrentRow(list) {
  return list.findIndex((item) => item.guessed === false);
}

export function getCurrentBox(list, currentRow) {
  return list[currentRow].children.findIndex((item) => item.value === "");
}

export function guessedWord(list, currentRow) {
  return list[currentRow].children.map((item) => item.value).join("");
}

export function getRandomWord(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex] ? data[randomIndex] : getRandomWord(data);
}

export function getOccurrences(word, letter) {
  return (word.toUpperCase().match(new RegExp(letter, "g")) || []).length;
}
