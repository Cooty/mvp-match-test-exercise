function getInitials(firstName: string, lastName: string) {
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();

  if (trimmedFirstName === "" || trimmedLastName === "") {
    return "";
  }

  return `${trimmedFirstName.split("")[0]}${trimmedLastName.split("")[0]}`;
}

export default getInitials;
