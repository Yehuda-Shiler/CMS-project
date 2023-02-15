import { Request, Response } from 'express'
import { sendDeleteItem } from '../services/delete-service'
import { Item } from '../utils/types'
export async function deleteItem (req: Request, res: Response): Promise<void> {
  const id: Item['id'] = req.body.id
  try {
    const response = await sendDeleteItem(id)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

module.exports = { deleteItem }
