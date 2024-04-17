export function getRandomInteger(min: number, max: number) {
  const minCeiled = Math.ceil(min),
    maxFloored = Math.floor(max);
  const result = Math.random() * (maxFloored - minCeiled) + minCeiled;
  return Math.floor(result);
}
