import { products } from "@prisma/client";

export interface IUpdateProduct extends Partial<products>{
    id: number
}