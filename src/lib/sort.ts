export const sortByAlphabet = (a: string, b: string) => {
  const A = a.toLocaleLowerCase();
  const B = b.toLocaleLowerCase();

  if (A > B) return 1;
  if (A < B) return -1;

  return 0;
};
