import { MongoClient, Db } from 'mongodb'

const { MONGO_URI, MONGO_DB } = process.env

let cachedClient: MongoClient
let cachedDb: Db

if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env.local'
  )
}

if (!MONGO_DB) {
  throw new Error(
    'Please define the MONGO_DB environment variable inside .env.local'
  )
}

export const connectToDatabase = async () => {

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client: MongoClient = await MongoClient.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db: Db = await client.db(MONGO_DB)

  cachedClient = client
  cachedDb = db

  return {
    client,
    db
  }
}