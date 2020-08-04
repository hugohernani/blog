import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn, Entity,
  JoinColumn, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @Field({nullable: true})
  id: string

  @Column('text', {nullable: false })
  @Field({nullable: true})
  content: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  updatedAt: Date

  @Column({nullable: true})
  postId: string;

  @ManyToOne(() => Post, post => post.comments)
  @JoinColumn({name: 'postId'})
  @Field(() => Post, {nullable: true})
  post: Post;
}
