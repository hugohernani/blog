import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBasicAuthorPostEntities1596304625207 implements MigrationInterface {
    name = 'AddBasicAuthorPostEntities1596304625207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" uuid, CONSTRAINT "REL_94a85bb16d24033a2afdd5df06" UNIQUE ("postId"), CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "post_status_enum" AS ENUM('draft', 'published')`);
        await queryRunner.query(`CREATE TABLE "post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" text NOT NULL, "status" "post_status_enum" NOT NULL DEFAULT 'draft', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "authorId" uuid, CONSTRAINT "REL_c6fb082a3114f35d0cc27c518e" UNIQUE ("authorId"), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TYPE "post_status_enum"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
