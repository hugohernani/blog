import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn, Entity,
  JoinColumn, OneToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string

  @Column('text', {nullable: false })
  @Field()
  content: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  @Field()
  updatedAt: Date

  @OneToOne(() => Post, post => post.comments)
  @JoinColumn()
  @Field(() => Post)
  post: Post;
}
