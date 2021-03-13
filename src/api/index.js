const BASE_API = 'http://localhost:8000'

const getFood = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return data
}

export default {
  getFood
}
