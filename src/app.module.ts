import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ProductModule, 
            SupplierModule, 
            UserModule, 
            CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
