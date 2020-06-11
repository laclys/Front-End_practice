function filterPersons(
  persons: Person[],
  personType: "admin",
  criteria: Partial<Person>,
): Admin[]
function filterPersons(
  persons: Person[],
  personType: "user",
  criteria: Partial<Person>,
): User[]
function filterPersons(
  persons: Person[],
  personType: string,
  criteria: Partial<Person>,
) {}

let usersOfAge23: User[] = filterPersons(persons, "user", { age: 23 })
let adminsOfAge23: Admin[] = filterPersons(persons, "admin", { age: 23 })
