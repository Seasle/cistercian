export const range = (from: number, to: number, step = 1) => {
  const items: number[] = [];

  for (let index = from; index <= to; index += step) {
    items.push(index);
  }

  return items;
};
