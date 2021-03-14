const BASE_API = 'http://localhost:8000'

const getFood = async () => {
  const response = await fetch(
      `${BASE_API}/postres/`
  )

  const data = await response.json()

  return data
}

const getBebidas = async () => {
  const response = await fetch(
      `${BASE_API}/bebidas/`
  )

  const data = await response.json()

  return data
}

export default {
  getFood,
  getBebidas
}
