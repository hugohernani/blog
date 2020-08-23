import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { findAndPaginate, ConnectionArgs } from "nestjs-graphql-relay";
import { FindManyOptions, Repository } from "typeorm";
import { PostEntity } from "../entities";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>
  ) {}

  async findById(id: string) {
    return this.postsRepository.findOneOrFail(id);
  }

  async find(
    where: FindManyOptions<PostEntity>["where"],
    order: FindManyOptions<PostEntity>["order"],
    connArgs: ConnectionArgs
  ) {
    return findAndPaginate({ where, order }, connArgs, this.postsRepository);
  }
}
