export interface Item {
  id?: string
  description: string
  name: string
  image: string
  video: string
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

export interface TokenPayload {
  userId: number;
  role: string;
}

export interface AuthRequest extends Request {
  user?: TokenPayload;
}
