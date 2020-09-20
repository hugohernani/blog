import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostStatus } from './enums';
import { AuthorEntity } from './author.entity';
import { CommentEntity } from './comment.entity';
import PostFileEntity from './postFile.entity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  status: string;

  @Column('decimal', { precision: 8, scale: 2, nullable: true })
  readingTime: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  @ManyToOne(() => AuthorEntity, (author) => author.posts)
  @JoinColumn({ name: 'authorId' })
  author: AuthorEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @OneToMany(() => PostFileEntity, (postFile) => postFile.post, {
    eager: true,
    lazy: true,
    cascade: true,
  })
  postFiles: Promise<PostFileEntity[]>;
}
