import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserCustomerTable1642550835433 implements MigrationInterface {
    name = 'createUserCustomerTable1642550835433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_postgres" ("id" integer NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customerId" integer, CONSTRAINT "REL_aad1924a0abd8c43dc03d42bee" UNIQUE ("customerId"), CONSTRAINT "PK_dd2f9e201fc79e6d1dcf6f5ec4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_postgres" ("id" integer NOT NULL, "name" character varying(255) NOT NULL, "lastname" character varying(255) NOT NULL, "phone" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_c26b648c13b48036c176c7c9f15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_postgres" ADD CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9" FOREIGN KEY ("customerId") REFERENCES "customer_postgres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_postgres" DROP CONSTRAINT "FK_aad1924a0abd8c43dc03d42bee9"`);
        await queryRunner.query(`DROP TABLE "customer_postgres"`);
        await queryRunner.query(`DROP TABLE "user_postgres"`);
    }

}
