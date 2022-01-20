import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1642540445852 implements MigrationInterface {
  name = 'init1642540445852';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "productp" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, CONSTRAINT "UQ_06d2269412b818f268b58adb6ff" UNIQUE ("name"), CONSTRAINT "PK_d0e2960d5d6feae2876711f3dae" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "productp"`);
  }
}
