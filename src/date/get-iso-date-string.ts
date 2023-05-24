function getISODateString(date: Date) {
  const dateTimeISOString = date.toISOString();
  return dateTimeISOString.split("T")[0];
}

export default getISODateString;
