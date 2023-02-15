
import { Response, Request } from 'express'
import { createItemModel, sendSaveToDB } from '../services/create-service'
import { Item } from '../utils/types'
export async function createNewItem (req: Request, res: Response): Promise<void> {
  console.log('createNewItem')
  const item: Item = { description: req.body.description, name: req.body.name, image: req.body.image, video: req.body.video }
  const newItem = createItemModel(item)
  try {
    const response = await sendSaveToDB(newItem)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(error.message)
  }
}

module.exports = { createNewItem }
