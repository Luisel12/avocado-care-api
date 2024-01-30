import { User } from "../entities/auth.entity";

export interface AuthResponse{
    user : User,
    token: string
}