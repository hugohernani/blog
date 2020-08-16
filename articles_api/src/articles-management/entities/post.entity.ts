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
import { Comment } from './comment.entity';

@Entity("post")
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column('text', {nullable: false })
  content: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT
  })
  status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date

  @ManyToOne(() => AuthorEntity, author => author.posts)
  @JoinColumn({name: 'authorId'})
  author: AuthorEntity;

  // @OneToMany(() => Comment, comment => comment.post)
  // @Field(() => [Comment], {nullable: true})
  // comments: Comment[];
}
