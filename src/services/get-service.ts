import { itemModel } from '../models/item.model'
import { Item } from '../utils/types'

export async function sendGetItem (id: Item['id']) {
  const response = await itemModel.findById(id)
  return response
}
module.exports = { sendGetItem }
