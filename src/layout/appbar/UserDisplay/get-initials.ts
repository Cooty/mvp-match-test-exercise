function getInitials(firstName: string, lastName: string) {
  return `${firstName.split("")[0]}${lastName.split("")[0]}`;
}

export default getInitials;
