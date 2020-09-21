import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTagsAndFileUpload1600665130448 implements MigrationInterface {
    name = 'AddTagsAndFileUpload1600665130448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "upload_file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url" character varying NOT NULL, "local" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_17afec80fc97979415eae19aee0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "main" boolean NOT NULL DEFAULT false, "postId" uuid, "uploadFileId" uuid, CONSTRAINT "PK_92d3b60cdcdd57e2ea334c1b26d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6a9775008add570dc3e5a0bab7b" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TABLE "post_tag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid, "tagId" character varying, CONSTRAINT "PK_3364a9669ea4b632cff0eb01944" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "local" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "readingTime"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "readingTime" numeric(8,2)`);
        await queryRunner.query(`ALTER TABLE "post_file" ADD CONSTRAINT "FK_e64c8840cd4cf48791f0642a8c3" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_file" ADD CONSTRAINT "FK_c4b02324f33432745c13e42e760" FOREIGN KEY ("uploadFileId") REFERENCES "upload_file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_tag" ADD CONSTRAINT "FK_444c1b4f6cd7b632277f5579354" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_tag" ADD CONSTRAINT "FK_346168a19727fca1b1835790a14" FOREIGN KEY ("tagId") REFERENCES "tag"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_tag" DROP CONSTRAINT "FK_346168a19727fca1b1835790a14"`);
        await queryRunner.query(`ALTER TABLE "post_tag" DROP CONSTRAINT "FK_444c1b4f6cd7b632277f5579354"`);
        await queryRunner.query(`ALTER TABLE "post_file" DROP CONSTRAINT "FK_c4b02324f33432745c13e42e760"`);
        await queryRunner.query(`ALTER TABLE "post_file" DROP CONSTRAINT "FK_e64c8840cd4cf48791f0642a8c3"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "readingTime"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "readingTime" integer`);
        await queryRunner.query(`ALTER TABLE "upload_file" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "upload_file" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TABLE "post_tag"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "post_file"`);
        await queryRunner.query(`DROP TABLE "upload_file"`);
    }

}
