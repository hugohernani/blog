import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostFileEntity } from './post-file.entity';

@Entity('upload_file')
export class UploadFileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  url: string;

  @Column({ default: false })
  local: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @OneToMany(() => PostFileEntity, (postFile) => postFile.uploadFile)
  postFiles: PostFileEntity[];

  // static create(params: { local; url }): UploadFileEntity {
  //   const instance = new UploadFileEntity();
  //   instance.local = local;
  //   instance.url = url;
  //   return instance;
  // }
}
