import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReadingTimeColOnPost1600331740866 implements MigrationInterface {
  name = 'AddReadingTimeColOnPost1600331740866';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" ADD "readingTime" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "readingTime"`);
  }
}
