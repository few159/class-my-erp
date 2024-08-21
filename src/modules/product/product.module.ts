import { Module } from '@nestjs/common';
import { ProductController } from 'src/controllers/product/product.controller';
import { ProductService } from 'src/services/product/product.service';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
