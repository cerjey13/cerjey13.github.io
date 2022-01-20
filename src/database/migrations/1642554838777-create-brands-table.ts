import {MigrationInterface, QueryRunner} from "typeorm";

export class createBrandsTable1642554838777 implements MigrationInterface {
    name = 'createBrandsTable1642554838777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand_postgres" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, CONSTRAINT "PK_4492badda26794b74bd5161a32d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productp" ADD "brandsId" integer`);
        await queryRunner.query(`ALTER TABLE "productp" ADD CONSTRAINT "FK_d5b0133daf6b8ab514fc450161b" FOREIGN KEY ("brandsId") REFERENCES "brand_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productp" DROP CONSTRAINT "FK_d5b0133daf6b8ab514fc450161b"`);
        await queryRunner.query(`ALTER TABLE "productp" DROP COLUMN "brandsId"`);
        await queryRunner.query(`DROP TABLE "brand_postgres"`);
    }

}
