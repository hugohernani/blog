import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '.';
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
