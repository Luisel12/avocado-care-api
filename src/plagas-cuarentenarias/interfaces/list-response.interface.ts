
import { PlagasCuarentenaria } from "../entities/plagas-cuarentenaria.entity"

export interface ListResponse{

    plagascu: PlagasCuarentenaria[],
    token: string
}