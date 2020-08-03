import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field } from '@nestjs/graphql'
import { PostStatus } from './enums';
import { Author } from './author.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string

  @Column()
  @Field()
  title: string

  @Column('text', {nullable: false })
  @Field()
  description: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT
  })
  @Field()
  status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  updatedAt: Date

  @OneToOne(() => Author, author => author.posts)
  @JoinColumn()
  @Field(() => Author)
  author: Author;

  @OneToMany(() => Comment, comment => comment.post)
  @Field(() => [Comment])
  comments: Comment[];
}
