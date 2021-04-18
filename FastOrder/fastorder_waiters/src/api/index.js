const BASE_API = 'http://localhost:8000'

const getPlatillos = async () => {
  const response = await fetch(
    `${BASE_API}/platillos/`
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

const getPostres = async () => {
  const response = await fetch(
      `${BASE_API}/postres/`
  )

  const data = await response.json()
  return data
}

const getClientes = async () => {
  const response = await fetch(
    `${BASE_API}/clientes/`
  )

  const data = await response.json()
  return data
}

const saveOrder = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/api/v1/ordenes/`,
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

const loginRequest = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/users/login/`,
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

const registerRequest = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/users/singup/`,
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

const tokenRequest = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/users/verify/`,
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

/* const createPostres = async (dataToDjango) => {
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

const createClientes = async (dataToDjango) => {
  const response = await fetch(
    `${BASE_API}/clientes/`,
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

*/
export default {
  getPlatillos,
  getBebidas,
  getPostres,
  getClientes,
  saveOrder,
  loginRequest,
  registerRequest,
  tokenRequest
  /* createPostres,
  createClientes,
  */
}
