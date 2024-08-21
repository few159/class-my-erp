import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from 'src/models/dtos/products/ProductDto';
import { ProductService } from 'src/services/product/product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
    constructor(private service: ProductService) { }

    @Get('all-products')
    getAll() {
        return this.service.getAllProducts();
    }

    
    @Post('register/:price')
    register(@Param('price') price: string, @Body() body: ProductDto) {
        return this.service.register({...body, price: Number(price)});
    }
}
