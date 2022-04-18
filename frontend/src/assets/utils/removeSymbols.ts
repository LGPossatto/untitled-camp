export const removeSymbols = (
  text: string,
  symbols: string[] = ["+", ",", "?", "=", "category"]
) => {
  let newText = text;

  for (const symbol of symbols) {
    newText = newText.split(symbol).join("");
  }

  return newText;
};
