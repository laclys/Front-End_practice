function isAdmin(user: Person): user is Admin {
  return user.hasOwnProperty('role');
}

function logPerson(person: Person) {
  let additionalInformation: string;
  if (isAdmin(person)) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(
    ` - ${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`
  );
}
