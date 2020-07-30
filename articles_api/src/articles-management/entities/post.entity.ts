import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { PostStatus } from './enums';
import { Author } from './author.entity';

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  title: string

  @Column('text', {nullable: false })
  description: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT
  })
  status: boolean

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date

  @OneToOne(() => Author, author => author.posts)
  @JoinColumn()
  author: Author;
}
