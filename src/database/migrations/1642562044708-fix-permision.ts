import {MigrationInterface, QueryRunner} from "typeorm";

export class fixPermision1642562044708 implements MigrationInterface {
    name = 'fixPermision1642562044708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productp_category_category_postgres" ("productpId" integer NOT NULL, "categoryPostgresId" integer NOT NULL, CONSTRAINT "PK_ea737b21737869e82311e74ea8a" PRIMARY KEY ("productpId", "categoryPostgresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a78c30376d516234ac972c1171" ON "productp_category_category_postgres" ("productpId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8bd2c65bf02716e7f02f5dc551" ON "productp_category_category_postgres" ("categoryPostgresId") `);
        await queryRunner.query(`ALTER TABLE "category_postgres" ADD CONSTRAINT "UQ_a697b47d7cac34c5c27e95323e8" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "category_postgres" DROP CONSTRAINT "UQ_9f8674a28156ff93f270e8dcb80"`);
        await queryRunner.query(`ALTER TABLE "productp_category_category_postgres" ADD CONSTRAINT "FK_a78c30376d516234ac972c11716" FOREIGN KEY ("productpId") REFERENCES "productp"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "productp_category_category_postgres" ADD CONSTRAINT "FK_8bd2c65bf02716e7f02f5dc5514" FOREIGN KEY ("categoryPostgresId") REFERENCES "category_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productp_category_category_postgres" DROP CONSTRAINT "FK_8bd2c65bf02716e7f02f5dc5514"`);
        await queryRunner.query(`ALTER TABLE "productp_category_category_postgres" DROP CONSTRAINT "FK_a78c30376d516234ac972c11716"`);
        await queryRunner.query(`ALTER TABLE "category_postgres" ADD CONSTRAINT "UQ_9f8674a28156ff93f270e8dcb80" UNIQUE ("image")`);
        await queryRunner.query(`ALTER TABLE "category_postgres" DROP CONSTRAINT "UQ_a697b47d7cac34c5c27e95323e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8bd2c65bf02716e7f02f5dc551"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a78c30376d516234ac972c1171"`);
        await queryRunner.query(`DROP TABLE "productp_category_category_postgres"`);
    }

}
