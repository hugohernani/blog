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
  @Field({nullable: true})
  id: string;

  @Column()
  @Field({nullable: true})
  firstName?: string;

  @Column()
  @Field({nullable: true})
  lastName?: string

  @Field(() => [Post], {nullable: 'items'})
  @OneToMany(() => Post, post => post.author, {
    eager: true,
    cascade: true
  })
  posts: Post[];
}
