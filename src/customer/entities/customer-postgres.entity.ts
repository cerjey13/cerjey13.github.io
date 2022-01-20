import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { OrderPostgres } from '../../orders/entities/order-postgres.entity';
import { UserPostgres } from '../../users/entities/user-postgres.entity';

@Entity()
export class CustomerPostgres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToOne(() => UserPostgres, (user) => user.customer, { nullable: true })
  user: UserPostgres;

  @OneToMany(() => OrderPostgres, (order) => order.customer)
  orders: OrderPostgres[];
}
