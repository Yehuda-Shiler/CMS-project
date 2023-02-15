import { Request, Response } from 'express'
import { sendGetItem } from '../services/get-service'
import { Item } from '../utils/types'
export async function getItem (req: Request, res: Response): Promise<void> {
  console.log('getItem')
  const id: Item['id'] = req.body.id
  try {
    const response = await sendGetItem(id)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

module.exports = { getItem }
