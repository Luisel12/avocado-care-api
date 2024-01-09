import { User } from "../entities/auth.entity";

export interface ListResponse{
    users: User[],
    token: string
}