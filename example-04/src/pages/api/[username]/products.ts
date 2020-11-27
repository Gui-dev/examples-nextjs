import { NextApiRequest, NextApiResponse } from 'next'

const handler = (request: NextApiRequest, response: NextApiResponse) => {

  const { method, query } = request

  try {
    response.status(201).json([
      { id: 1, name: 'Jessi Lara', method, query },
      { id: 1, name: 'Vini Diniz', method, query },
      { id: 1, name: 'Davi Diniz', method, query }
    ])
  } catch (error) {
    response.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler