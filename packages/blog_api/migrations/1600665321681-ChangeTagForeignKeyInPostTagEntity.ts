import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTagForeignKeyInPostTagEntity1600665321681 implements MigrationInterface {
    name = 'ChangeTagForeignKeyInPostTagEntity1600665321681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_tag" DROP CONSTRAINT "FK_346168a19727fca1b1835790a14"`);
        await queryRunner.query(`ALTER TABLE "post_tag" RENAME COLUMN "tagId" TO "tagName"`);
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post_tag" ADD CONSTRAINT "FK_95280b0a3b605ab83b9fce219f7" FOREIGN KEY ("tagName") REFERENCES "tag"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_tag" DROP CONSTRAINT "FK_95280b0a3b605ab83b9fce219f7"`);
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post_tag" RENAME COLUMN "tagName" TO "tagId"`);
        await queryRunner.query(`ALTER TABLE "post_tag" ADD CONSTRAINT "FK_346168a19727fca1b1835790a14" FOREIGN KEY ("tagId") REFERENCES "tag"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
