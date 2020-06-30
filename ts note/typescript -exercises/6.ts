function filterUsers(persons: Person[], criteria: Partial<User>): User[] {
  return persons.filter(isUser).filter((user) => {
    let criteriaKeys = Object.keys(criteria) as (keyof User)[]
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName]
    })
  })
}