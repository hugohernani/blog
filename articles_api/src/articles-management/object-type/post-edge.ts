import { ObjectType } from '@nestjs/graphql';
import { GenericEdgeType } from './generic-edge-type';
import { Post } from '../entities';

@ObjectType()
export class PostEdge extends GenericEdgeType(Post){}
