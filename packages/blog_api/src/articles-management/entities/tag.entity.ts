import { Entity, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { PostTagEntity } from './post-tag.entity';

@Entity('tag')
export class TagEntity {
  @Column({ primary: true })
  name: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @OneToMany(() => PostTagEntity, (postTag) => postTag.tag)
  postTags!: PostTagEntity[];
}
