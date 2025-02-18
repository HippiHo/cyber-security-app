export const getReadableTime = (oldTimeString) => {
  const day = oldTimeString.split("T")[0];
  const newDate = new Date(oldTimeString);
  const hours = newDate.getUTCHours();
  const minutes = newDate.getUTCMinutes();

  const newTimeString = `${day} at ${hours}:${minutes}`;

  return newTimeString;
};
