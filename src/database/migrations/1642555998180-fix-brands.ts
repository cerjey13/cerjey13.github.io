import {MigrationInterface, QueryRunner} from "typeorm";

export class fixBrands1642555998180 implements MigrationInterface {
    name = 'fixBrands1642555998180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brand_postgres" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "brand_postgres" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "brand_postgres" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "brand_postgres" DROP COLUMN "createAt"`);
    }

}
