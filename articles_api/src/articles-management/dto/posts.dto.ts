import { ConnectionArgs, OrderByInput } from "nestjs-graphql-relay";
import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { PostEntity } from "../entities";

@InputType()
export class PostEntityWhereInput implements Partial<PostEntity> {
  @Field({ nullable: true })
  readonly title?: string;
}

@ArgsType()
export class PostEntityConnectionArgs extends ConnectionArgs {
  @Field(() => PostEntityWhereInput, { nullable: true })
  readonly where?: PostEntityWhereInput; // TODO Improve to receive dynamic inputs from Entity attributes

  @Field(() => OrderByInput, { nullable: true })
  readonly orderBy?: OrderByInput;
}
