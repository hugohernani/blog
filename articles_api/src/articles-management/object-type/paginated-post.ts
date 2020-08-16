import { ObjectType } from '@nestjs/graphql';
import { Paginated } from './paginated';
import { Post } from '../entities';
import { PostEdge } from './post-edge';

@ObjectType()
export class PaginatedPost extends Paginated(Post, PostEdge){}
