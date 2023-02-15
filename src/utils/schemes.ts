import Joi from 'joi'
export const itemSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  id: Joi.string()
    .alphanum()
    .min(24)
    .max(24),

  description: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  image: Joi.string()
    .min(3)
    .max(30),

  video: Joi.string()
    .min(3)
    .max(30)
})

export const idSchema = Joi.object({
  id: Joi.string()
    .alphanum()
    .min(24)
    .max(24)
    .required()
})

export const userSchema = Joi.object({
  id: Joi.number()
    .min(24)
    .max(24)
    .required(),

  username: Joi.string()
    .min(3)
    .max(24)
    .required(),

  password: Joi.string()
    .min(3)
    .max(24)
    .required(),

  role: Joi.string()
    .min(24)
    .max(24)
    .required()
    
})

module.exports = { itemSchema, idSchema, userSchema }
