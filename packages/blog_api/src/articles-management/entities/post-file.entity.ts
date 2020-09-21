import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '.';
import { UploadFileEntity } from './upload-file.entity';

@Entity('post_file')
export class PostFileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: false })
  main: boolean;

  @ManyToOne(() => PostEntity, (post) => post.postFiles)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;

  @ManyToOne(() => UploadFileEntity, (uploadFile) => uploadFile.postFiles, {
    cascade: true,
  })
  @JoinColumn({ name: 'uploadFileId' })
  uploadFile: UploadFileEntity;
}
