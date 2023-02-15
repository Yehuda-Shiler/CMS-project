import { itemModel } from '../models/item.model'
import { Item } from '../utils/types'

export async function sendDeleteItem (id: Item['id']) {
  const response = await itemModel.deleteOne({ _id: id })
  return response
}
module.exports = { sendDeleteItem }
