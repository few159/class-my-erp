import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IUpdateProduct } from 'src/models/interfaces/IProducts';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }

    async getAllProducts() {
        return await this.prisma.products.findMany();
    }

    async getProduct(productId: number) {
        return await this.prisma.products.findUnique({
            where: {
                id: productId
            },
            include: {
                product_category: true
            }
        });
    }

    async deleteProduct(productId: number) {
        return await this.prisma.products.delete({
            where: {
                id: productId
            }
        })
    }

    async updateProduct(productId: number, newProduct: IUpdateProduct) {
        return await this.prisma.products.update({
            data: newProduct,
            where: { id: productId }
        })
    }

    register(body: { price: number; id: number; name: string; }) {
        return `[${body.id}] O produto ${body.name} foi cadastrado, e seu preço atualizado para ${body.price}`
    }
}
