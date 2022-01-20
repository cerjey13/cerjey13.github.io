import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
  JoinColumn,
} from 'typeorm';

import { BrandPostgres } from '../../brands/entities/brand-postgres.entity';
import { CategoryPostgres } from '../../categories/entities/category-postgres.entity';

@Entity() // { name: 'products' }
@Index(['price', 'stock'])
export class Productp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @CreateDateColumn({
    //name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    //name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => BrandPostgres, (brand) => brand.products)
  //@JoinColumn({ name: 'brand_id' })
  brands: BrandPostgres;

  @ManyToMany(() => CategoryPostgres, (category) => category.products)
  // @JoinTable({
  //   name: 'products_categories',
  //   joinColumn: {
  //     name: 'product_id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'category_id',
  //   },
  // })
  category: CategoryPostgres[];
}
