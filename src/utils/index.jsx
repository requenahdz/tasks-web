export const findInObject = (value, collection) => {
  return collection.find((item) => item.value === value);
};

export const formatTime = (minutes) => {
  if (minutes < 0) {
    return "0:00";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}:${remainingMinutes}`;
};
