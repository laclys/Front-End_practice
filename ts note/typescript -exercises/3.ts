function logPerson(person: Person) {
  let additionalInformation: string;
  if ('role' in person) { // 类型保护
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(
    ` - ${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`
  );
}
