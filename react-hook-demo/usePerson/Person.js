const Person = ({ personId }) => {
  const [loading, person] = usePerson(personId)

  if (loading === true) {
    return <p>Loading ...</p>
  }

  return (
    <div>
      <p>You're viewing: {person.name}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
    </div>
  )
}

const usePerson = (personId) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})
  useEffect(() => {
    setLoading(true)
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data)
        setLoading(false)
      });
  }, [personId])
  return [loading, person]
}