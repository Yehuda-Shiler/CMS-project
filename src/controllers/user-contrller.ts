import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { userModel } from '../models/item.model';
import { cheakLogin } from '../services/user-service';
import { SECRET_KEY } from '../utils/login';
export async function loginUser (req: Request, res: Response): Promise<void> {

  const { username, password } = req.body;
  const user = new userModel({
    username: username,
    password: password,
  });
  try {
    const response = await cheakLogin(user)
  if (response){
    const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, {
      expiresIn: '1h'  
    });
    console.log('token ' + token)
  res.status(200).json(token)
  }
  else
    res.status(400).json('Invalid username or password');
} catch (error: any) {
    res.status(400).json(error.message)
  }
}

export async function createUser (req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  const data = new userModel({
    username: username,
    password: password,
    role: 'user',
  });
  const response = await data.save();
  console.log('response' + response);
  res.status(200).json(response)
}

module.exports = { loginUser, createUser }