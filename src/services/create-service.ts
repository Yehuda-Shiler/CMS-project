import { Document, Types } from 'mongoose'
import { itemModel } from '../models/item.model'
import { Item } from '../utils/types'

export function createItemModel (item: Item) {
  console.log('createItemModel')
  const data = new itemModel({
    description: item.description,
    name: item.name,
    image: item.image,
    video: item.video
  })
  return data
}

export async function sendSaveToDB (newItem: Document<unknown, any, Record<string, any>> & Record<string, any> & Required<{ _id: unknown }>) {
  const dataToSave = await newItem.save()
  return dataToSave
}
module.exports = { createItemModel, sendSaveToDB }
