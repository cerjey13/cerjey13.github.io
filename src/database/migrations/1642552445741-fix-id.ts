import {MigrationInterface, QueryRunner} from "typeorm";

export class fixId1642552445741 implements MigrationInterface {
    name = 'fixId1642552445741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "user_postgres_id_seq" OWNED BY "user_postgres"."id"`);
        await queryRunner.query(`ALTER TABLE "user_postgres" ALTER COLUMN "id" SET DEFAULT nextval('"user_postgres_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "user_postgres" DROP CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "customer_postgres_id_seq" OWNED BY "customer_postgres"."id"`);
        await queryRunner.query(`ALTER TABLE "customer_postgres" ALTER COLUMN "id" SET DEFAULT nextval('"customer_postgres_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "user_postgres" ADD CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9" FOREIGN KEY ("customerId") REFERENCES "customer_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_postgres" DROP CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9"`);
        await queryRunner.query(`ALTER TABLE "customer_postgres" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "customer_postgres_id_seq"`);
        await queryRunner.query(`ALTER TABLE "user_postgres" ADD CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9" FOREIGN KEY ("customerId") REFERENCES "customer_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_postgres" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "user_postgres_id_seq"`);
    }

}
