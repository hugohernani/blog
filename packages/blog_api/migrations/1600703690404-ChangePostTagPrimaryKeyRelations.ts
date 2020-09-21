import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangePostTagPrimaryKeyRelations1600703690404 implements MigrationInterface {
    name = 'ChangePostTagPrimaryKeyRelations1600703690404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
