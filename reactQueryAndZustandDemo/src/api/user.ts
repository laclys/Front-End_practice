import type { User } from '@/types'

export type GetUsersFilters = {
  limit?: number
  page?: number
}

export const getUsers = async (filters?: GetUsersFilters): Promise<User[]> => {

 // Do someting cool with filters

  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  return [
    { id: 1, name: 'John Doe1' },
    { id: 2, name: 'Jane Doe2' },
  ] as User[]
}
