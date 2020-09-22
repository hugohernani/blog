import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PostStatus } from './enums';
import { PostFileEntity } from './post-file.entity';
import { PostTagEntity } from './post-tag.entity';
import { TagEntity } from './tag.entity';

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
  status: PostStatus;

  @Column('decimal', { precision: 8, scale: 2, nullable: true })
  readingTime: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  @OneToMany(() => PostFileEntity, (postFile) => postFile.post, {
    eager: true,
    cascade: true,
  })
  postFiles: PostFileEntity[];

  @OneToMany(() => PostTagEntity, (postTag) => postTag.post, {
    eager: true,
    cascade: true,
  })
  postTags: PostTagEntity[];

  // Directly database mapped through querybuilder leftjoinandMapMany
  mappedTags: TagEntity[];
}
