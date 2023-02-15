import { Response, Request } from 'express'
import { itemSchema, idSchema } from '../utils/schemes'

export function validateCreateItem (req: Request, response: Response, next: () => void): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { error, value } = itemSchema.validate({ description: req.body.description, name: req.body.name, image: req.body.image, video: req.body.video })
  if (error != null) { response.status(400).send(error) } else { next() }
}

export function validateUpdateItem (req: Request, response: Response, next: () => void): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { error, value } = itemSchema.validate({
    id: req.body.oldItem.id,
    description: req.body.newItem.description,
    name: req.body.newItem.name,
    image: req.body.newItem.image,
    video: req.body.newItem.video
  })
  if (error != null) { response.status(400).send(error) } else { next() }
}

export function validateIdOfItem (req: Request, response: Response, next: () => void): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { error, value } = idSchema.validate({
    id: req.body.id
  })
  if (error != null) { response.status(300).send(error) } else { next() }
}

module.exports = { validateCreateItem, validateUpdateItem, validateIdOfItem }
