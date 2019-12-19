// useSetState hook

function useSetState(initial = {}) {
  const [state, saveState] = useState(initial)
  const setState = useCallback((newState) => {
    saveState(prev => ({...prev, ...newState}))
  }, [])

  return [state, setState]
}

// eg

const [person, setPerson] = useSetState({age:12,name:'A',id:000001})

const changeAge = (age) => {
  setPerson({age})
}