import { NextApiRequest, NextApiResponse } from 'next'

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  try {
    response.status(201).json([
      { id: 1, name: 'Jessi Lara' },
      { id: 1, name: 'Vini Diniz' },
      { id: 1, name: 'Davi Diniz' }
    ])
  } catch (error) {
    response.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler