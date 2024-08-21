import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    constructor() { }

    getAllProducts() {
        return Array(10).fill('').map((_, index) => {
            return {
                id: index,
                name: 'Produto ' + index
            }
        })
    }

    register(body: { price: number; id: number; name: string; }) {
        return `[${body.id}] O produto ${body.name} foi cadastrado, e seu preço atualizado para ${body.price}`
    }
}
