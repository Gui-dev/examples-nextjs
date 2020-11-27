import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from './../../../utils/mongodb'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase()
    const data = await db.collection('users').find().toArray()
    
    return response.status(201).json(data)
  } catch (error) {
    response.status(500).json({ statusCode: 500, message: error.message })
  }
}

export default handler