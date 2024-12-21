import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/api/user'
import { useUserStore } from '@/state/userStore'

import './App.css'

const App = () => {
  const { filters } = useUserStore()

  const { data } = useQuery({
    queryKey: ['users', filters],
    queryFn: () => getUsers(filters),
  })

  return (
    <div className="content">
      <FiltersComponent />
      <h1>Users</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

function FiltersComponent() {
  const { filters, setFilters } = useUserStore()

  return (
    <div>
      {/* <input
        type="number"
        value={filters?.limit}
        onChange={(e) =>
          setFilters({ ...filters, limit: Number(e.target.value) })
        }
      />
      <input
        type="number"
        value={filters?.page}
        onChange={(e) =>
          setFilters({ ...filters, page: Number(e.target.value) })
        }
      /> */}
    </div>
  )
}
