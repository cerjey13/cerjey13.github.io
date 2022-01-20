import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CustomerPostgres } from '../../customer/entities/customer-postgres.entity';
import { OrderItemPostgres } from './order-product-postgres.entity';

@Entity()
export class OrderPostgres {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => CustomerPostgres, (customer) => customer.orders)
  customer: CustomerPostgres;

  @OneToMany(() => OrderItemPostgres, (item) => item.order)
  items: OrderItemPostgres[];
}
