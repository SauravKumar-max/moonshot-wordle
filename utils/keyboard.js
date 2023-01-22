export const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
export const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
export const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export function getKeys() {
  const alphabets = [];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    const alphabet = { value: String.fromCharCode(i), status: "guessing" };
    alphabets.push(alphabet);
  }
  return alphabets;
}

export function keyStatus(list, alphabet) {
  const keyIndex = list.findIndex((item) => item.value === alphabet);
  const letterStatus = list[keyIndex].status;
  return { keyIndex, letterStatus };
}
