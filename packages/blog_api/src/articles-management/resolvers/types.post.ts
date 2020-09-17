import { ConnectionType, QueryArgsType } from '@nestjs-query/query-graphql'

import { ArgsType } from '@nestjs/graphql'
import { PostDTO } from '../dto'

export const PostConnection = ConnectionType(PostDTO)

@ArgsType()
export class PostQuery extends QueryArgsType(PostDTO) {}
