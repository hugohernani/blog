import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PostFileEntity from './postFile.entity';

@Entity()
class UploadFileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ default: false })
  local: boolean;

  @OneToMany(() => PostFileEntity, (postFile) => postFile.post)
  postFiles: PostFileEntity[];
}

export default UploadFileEntity;
