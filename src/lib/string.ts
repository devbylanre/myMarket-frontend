export const truncateString = (string: string, length: number) => {
  const slice = string.slice(0, length);

  if (string.length > length) {
    return slice + '...';
  }

  return slice;
};

export const getDiscountedPrice = (price: number, percent: number) => {
  return price - (price * percent) / 100;
};
