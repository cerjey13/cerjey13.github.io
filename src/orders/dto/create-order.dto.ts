import { IsDate, IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateOrderDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  products: Product[];
}
