import axios from 'axios'

export const getUsers = async (limit: number, skip: number) => {
  const users = await axios.get(`https://dummyjson.com/users?limt=${limit}&skip=${skip}`)

  return users.data.users
}
