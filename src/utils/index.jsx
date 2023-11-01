export const findInObject = (value, collection) => {
  return collection.find((item) => item.value === value);
};
