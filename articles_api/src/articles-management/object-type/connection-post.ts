import { ObjectType } from '@nestjs/graphql';
import { Connection } from './connection';
import { PostEdge } from './post-edge';

@ObjectType()
export class ConnectionPost extends Connection(PostEdge){}
