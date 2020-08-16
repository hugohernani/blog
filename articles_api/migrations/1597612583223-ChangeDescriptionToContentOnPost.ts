import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeDescriptionToContentOnPost1597612583223 implements MigrationInterface {
    name = 'ChangeDescriptionToContentOnPost1597612583223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "content" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "description" text NOT NULL`);
    }

}
