import {
  Column,
  CreateDateColumn, Entity,
  JoinColumn, ManyToOne, PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { PostEntity } from './post.entity';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('text', {nullable: false })
  content: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date

  @ManyToOne(() => PostEntity, post => post.comments)
  @JoinColumn({name: 'postId'})
  post: PostEntity;
}
