const BASE_API = 'http://localhost:8000'

const createPostres = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/postres/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToDjango)
    }
  )
  const data = await response.json()
  return data
}

const createPlatillos = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/platillos/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToDjango)
    }
  )
  const data = await response.json()
  return data
}

const createBebidas = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/bebidas/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToDjango)
    }
  )
  const data = await response.json()
  return data
}

export default {
  createPostres,
  createPlatillos,
  createBebidas
}
