import { AlertasPlagas } from "src/alertas_plagas/entities/alertas_plagas.entity";


export interface ListResponse{
    alertaplagas: AlertasPlagas[],
    token: string
}