import {MigrationInterface, QueryRunner} from "typeorm";

export class orders1642610779914 implements MigrationInterface {
    name = 'orders1642610779914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_item_postgres" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "quantity" integer NOT NULL, "productId" integer, "orderId" integer, CONSTRAINT "PK_6519a7322a28cbdc5239f6eb7f1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_postgres" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customerId" integer, CONSTRAINT "PK_47da0176e2d6e5a0e099a0f1121" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order_item_postgres" ADD CONSTRAINT "FK_c18683af58f11f332180fdbe147" FOREIGN KEY ("productId") REFERENCES "productp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item_postgres" ADD CONSTRAINT "FK_a489ae80836993fde6b8e87a5f2" FOREIGN KEY ("orderId") REFERENCES "order_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_postgres" ADD CONSTRAINT "FK_d2294f2d90f0f48a7f6bfa4a227" FOREIGN KEY ("customerId") REFERENCES "customer_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_postgres" DROP CONSTRAINT "FK_d2294f2d90f0f48a7f6bfa4a227"`);
        await queryRunner.query(`ALTER TABLE "order_item_postgres" DROP CONSTRAINT "FK_a489ae80836993fde6b8e87a5f2"`);
        await queryRunner.query(`ALTER TABLE "order_item_postgres" DROP CONSTRAINT "FK_c18683af58f11f332180fdbe147"`);
        await queryRunner.query(`DROP TABLE "order_postgres"`);
        await queryRunner.query(`DROP TABLE "order_item_postgres"`);
    }

}
