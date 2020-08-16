import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { PostEntity } from './post.entity';

@Entity('author')
export class AuthorEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string

  @OneToMany(() => PostEntity, post => post.author, {
    eager: true,
    cascade: true
  })
  posts: PostEntity[];
}
