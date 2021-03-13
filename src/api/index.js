const BASE_API = 'http://localhost:8000'

const getFood = async () => {
    const response = await fetch(
      `${BASE_API}/users/`
  )
  const data = await response.json()

  return data
}

export default {
  getFood
}
