import {MigrationInterface, QueryRunner} from "typeorm";

export class addFields1642546473524 implements MigrationInterface {
    name = 'addFields1642546473524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productp" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "productp" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productp" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "productp" DROP COLUMN "createAt"`);
    }

}
