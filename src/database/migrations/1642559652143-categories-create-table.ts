import {MigrationInterface, QueryRunner} from "typeorm";

export class categoriesCreateTable1642559652143 implements MigrationInterface {
    name = 'categoriesCreateTable1642559652143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category_postgres" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_9f8674a28156ff93f270e8dcb80" UNIQUE ("image"), CONSTRAINT "PK_258ee3ce4a58ef8a0eb7b495a49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_postgres_products_productp" ("categoryPostgresId" integer NOT NULL, "productpId" integer NOT NULL, CONSTRAINT "PK_def23dd75e73a17c7eaeafaaf32" PRIMARY KEY ("categoryPostgresId", "productpId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2ebea20e1e0f7b0f8be7120b50" ON "category_postgres_products_productp" ("categoryPostgresId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6ce61d143f8df1240fcd4e7745" ON "category_postgres_products_productp" ("productpId") `);
        await queryRunner.query(`ALTER TABLE "category_postgres_products_productp" ADD CONSTRAINT "FK_2ebea20e1e0f7b0f8be7120b501" FOREIGN KEY ("categoryPostgresId") REFERENCES "category_postgres"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_postgres_products_productp" ADD CONSTRAINT "FK_6ce61d143f8df1240fcd4e77452" FOREIGN KEY ("productpId") REFERENCES "productp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_postgres_products_productp" DROP CONSTRAINT "FK_6ce61d143f8df1240fcd4e77452"`);
        await queryRunner.query(`ALTER TABLE "category_postgres_products_productp" DROP CONSTRAINT "FK_2ebea20e1e0f7b0f8be7120b501"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6ce61d143f8df1240fcd4e7745"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2ebea20e1e0f7b0f8be7120b50"`);
        await queryRunner.query(`DROP TABLE "category_postgres_products_productp"`);
        await queryRunner.query(`DROP TABLE "category_postgres"`);
    }

}
