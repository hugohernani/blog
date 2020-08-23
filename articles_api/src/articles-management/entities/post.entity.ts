import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field } from '@nestjs/graphql'
import { PostStatus } from './enums';
import { AuthorEntity } from './author.entity';
import { CommentEntity } from './comment.entity';

@ObjectType()
@Entity("post")
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Field()
  title: string

  @Column('text', {nullable: false })
  @Field()
  content: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT
  })
  @Field()
  status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date

  @ManyToOne(() => AuthorEntity, author => author.posts)
  @JoinColumn({name: 'authorId'})
  author: AuthorEntity;

  @OneToMany(() => CommentEntity, comment => comment.post)
  comments: CommentEntity[];
}
