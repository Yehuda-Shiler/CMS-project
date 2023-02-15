/* eslint-disable @typescript-eslint/no-floating-promises */
import mongoose from 'mongoose'
export async function activeDB (): Promise<void> {
  const mongoString: string = process.env.DATABASE_URL || '3000'
  console.log(mongoString)
  mongoose.set('strictQuery', true)
  mongoose.connect(mongoString)
  const database = mongoose.connection

  database.on('error', (error) => {
    console.log(error)
  })

  database.once('connected', () => {
    console.log('Database Connected')
  })
}

module.exports = { activeDB }
