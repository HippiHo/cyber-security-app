export const getReadableTime = (oldTimeString) => {
  const day = oldTimeString.split("T")[0];
  const newDate = new Date(oldTimeString);
  const hours = newDate.getUTCHours();
  const minutes = newDate.getUTCMinutes();

  const twoDigits = (number) => {
    if (String(number).length === 1) {
      return "0" + String(number);
    }
    return String(number);
  };

  const newTimeString = `${day} at ${twoDigits(hours)}:${twoDigits(minutes)}`;

  return newTimeString;
};
