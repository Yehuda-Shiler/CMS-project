import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../utils/login';
import { TokenPayload } from '../utils/types';

declare module 'express-serve-static-core' {
    interface Request {
        user: TokenPayload;
    }
}

export function authenticateToken(req: Request, response: Response, next: NextFunction): void {
    const authHeader:string = req.headers['authorization'] || '';
     if (!authHeader)
         response.status(401).send('Unauthorized');
  
    jwt.verify(authHeader, SECRET_KEY, (err, user) => {
      if (err) 
        response.status(403).send('Invalid token');
      req.user = user as TokenPayload;
      next();
    });
  }

  export function authenticateRole(req: Request, response: Response, next: NextFunction): void {
   if (req.user.role !== 'admin')
     response.status(401).send('The user is not authorized');
   else
     next();
   }

  module.exports = { authenticateToken, authenticateRole };
