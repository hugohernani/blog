import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '.';
import UploadFileEntity from './uploadFile.entity';

@Entity('post_file')
class PostFileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: false })
  main: boolean;

  @ManyToOne(() => PostEntity, (post) => post.postFiles)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;

  @ManyToOne(() => UploadFileEntity, (uploadFile) => uploadFile.postFiles, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'uploadFileId' })
  uploadFile: UploadFileEntity;
}

export default PostFileEntity;
