import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from '.';
import { TagEntity } from './tag.entity';

@Entity('post_tag')
export class PostTagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => PostEntity, (post) => post.postTags)
  @JoinColumn({ name: 'postId' })
  post: PostEntity;

  @ManyToOne(() => TagEntity, (tag) => tag.postTags, {
    cascade: true,
  })
  @JoinColumn({ name: 'tagName' })
  tag: TagEntity;
}
