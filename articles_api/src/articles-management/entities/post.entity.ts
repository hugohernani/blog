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
import { Author } from './author.entity';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string

  @Column()
  @Field({nullable: true})
  title: string

  @Column('text', {nullable: false })
  @Field({nullable: true})
  description: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT
  })
  @Field({nullable: true})
  status: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  updatedAt: Date

  @Column({nullable: true})
  authorId: string;

  @ManyToOne(() => Author, author => author.posts)
  @JoinColumn({name: 'authorId'})
  @Field(() => Author, {nullable: true})
  author: Author;

  @OneToMany(() => Comment, comment => comment.post)
  @Field(() => [Comment], {nullable: true})
  comments: Comment[];
}
