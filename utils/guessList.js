export function getGuessList(guesses) {
  const list = [];
  for (let i = 0; i < guesses; i++) {
    const item = {
      guessed: false,
      children: [
        { value: "", status: "guessing" },
        { value: "", status: "guessing" },
        { value: "", status: "guessing" },
        { value: "", status: "guessing" },
        { value: "", status: "guessing" },
      ],
    };
    list.push(item);
  }
  return list;
}
