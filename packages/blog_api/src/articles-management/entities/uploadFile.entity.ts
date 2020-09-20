import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PostFileEntity from './postFile.entity';

@Entity('upload_file')
class UploadFileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  url: string;

  @Column({ default: false })
  local: boolean;

  @OneToMany(() => PostFileEntity, (postFile) => postFile.post)
  postFiles: PostFileEntity[];

  // static create(params: { local; url }): UploadFileEntity {
  //   const instance = new UploadFileEntity();
  //   instance.local = local;
  //   instance.url = url;
  //   return instance;
  // }
}

export default UploadFileEntity;
