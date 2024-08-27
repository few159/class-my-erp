import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from 'src/models/dtos/products/ProductDto';
import { IUpdateProduct } from 'src/models/interfaces/IProducts';
import { ProductService } from 'src/services/product/product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private service: ProductService) { }

    @Get('all-products')
    async getAll() {
        return await this.service.getAllProducts();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return await this.service.getProduct(Number(id));
    }

    @Put(':id')
    async update(@Param('id') productId: string, @Body() product: IUpdateProduct) {
        return await this.service.updateProduct(Number(productId), product)
    }

    @Delete(':id')
    async remove(@Param('id') productId: string) {
        return await this.service.deleteProduct(Number(productId))
    }

    @Post('register/:price')
    register(@Param('price') price: string, @Body() body: ProductDto) {
        return this.service.register({ ...body, price: Number(price) });
    }
}
