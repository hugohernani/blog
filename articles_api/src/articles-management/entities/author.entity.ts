import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Post } from './post.entity';

@ObjectType()
@Entity()
export class Author{
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string

  @OneToMany(() => Post, post => post.author, {
    eager: true,
    cascade: true
  })
  posts: Post[];
}
