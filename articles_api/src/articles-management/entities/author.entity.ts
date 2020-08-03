import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field } from '@nestjs/graphql'
import { Post } from './post.entity';

@ObjectType()
@Entity()
export class Author{
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName?: string;

  @Column()
  @Field()
  lastName?: string

  @OneToMany(() => Post, post => post.author, {
    eager: true,
    cascade: true
  })
  @Field(() => Post)
  posts: Post[];
}
