import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '.';
import UploadFileEntity from './uploadFile.entity';

@Entity()
class PostFileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  main: boolean;

  @ManyToOne(() => PostEntity, (post) => post.postFiles)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;

  @ManyToOne(() => UploadFileEntity, (uploadFile) => uploadFile.postFiles)
  @JoinColumn({ name: 'uploadFileId' })
  uploadFile: UploadFileEntity;
}

export default PostFileEntity;
