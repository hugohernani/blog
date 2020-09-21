import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveAuthorCommentsTablesFK1600715751934 implements MigrationInterface {
  name = 'RemoveAuthorCommentsTablesFK1600715751934';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "authorId"`);
    await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "post" ADD "authorId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
