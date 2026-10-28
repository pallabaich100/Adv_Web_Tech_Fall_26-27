import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1793018556556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL PRIMARY KEY,
                "full_name" VARCHAR(100) NOT NULL,
                "email" VARCHAR NOT NULL UNIQUE,
                "role" VARCHAR NOT NULL DEFAULT 'student'
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

