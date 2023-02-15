import { itemModel } from '../models/item.model'
import { Item } from '../utils/types'

export async function updateItem (oldItem: Item, newItem: Item) {
  const response = await itemModel.findOneAndReplace({ _id: oldItem.id }, newItem, { returnNewDocument: true })
  return response
}
module.exports = { updateItem }
