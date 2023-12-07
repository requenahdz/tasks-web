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

export const convertObjectToUri = (obj) => {
  const queryString = Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
  return `?${queryString}`;
};
export const isEmtyObject = (objeto) => {
  return Object.keys(objeto).length === 0;
};
