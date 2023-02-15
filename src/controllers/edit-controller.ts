
import { Request, Response } from 'express'
import { updateItem } from '../services/edit-service'
import { Item } from '../utils/types'
export async function editItem (req: Request, res: Response): Promise<void> {

  const newItem: Item =
  {
    description: req.body.newItem.description,
    name: req.body.newItem.name,
    image: req.body.newItem.image,
    video: req.body.newItem.video
  }
  const oldItem = req.body.oldItem
  try {
    const response = await updateItem(oldItem, newItem)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

module.exports = { editItem }
