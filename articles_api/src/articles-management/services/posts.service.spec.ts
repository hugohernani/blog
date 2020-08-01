import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { Post, PostStatus } from '../entities';

let mockPostsRepository = {
  find: (_: any) => {},
  save: (_: any) => {}
}

let postInstance: Post;
const PostsRepositoryProvider = getRepositoryToken(Post);


describe('PostsService', () => {
  let service: PostsService;
  let postsRepository: any;
  let appModule: TestingModule;


  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PostsRepositoryProvider,
          useValue: mockPostsRepository
        }
      ],
    }).compile();

    service = await appModule.resolve<PostsService>(PostsService);
    postsRepository = appModule.get(PostsRepositoryProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    beforeEach(() => {
      jest.spyOn(postsRepository, 'find').mockImplementation(async () => [postInstance]);
    })

    afterEach(() => {
      jest.spyOn(postsRepository, 'find').mockReset();
    })

    let postsWhereCondition = {
      author: {
        id: 'author-uuid'
      }
    }

    let postsRepositoryFindExpectedParams = {
      where: postsWhereCondition,
      relations: ['author']
    }

    it('should call postsRepository to retrieve all posts on database', async () => {
      await service.findAll(postsWhereCondition);
      expect(postsRepository.find).toHaveBeenCalledWith(postsRepositoryFindExpectedParams);
    });

    it('should return a list of post instances', async () => {
      let result = await service.findAll(postsWhereCondition);
      expect(result).toContainEqual(postInstance);
    });
  });

  describe('changeStatus', () => {
    beforeEach(() => {
      jest.spyOn(postsRepository, 'save').mockImplementation(async () => postInstance);
    })

    afterEach(() => {
      jest.spyOn(postsRepository, 'save').mockReset();
    })

    let postAttrs = {
      id: 'post-uuid',
      status: PostStatus.DRAFT
    }

    it('should call postsRepository to retrieve all posts on database', async () => {
      await service.changeStatus(postAttrs);
      expect(postsRepository.save).toHaveBeenCalledWith(postAttrs);
    });

    it('should return one post instance', async () => {
      let result = await service.changeStatus(postAttrs);
      expect(result).toEqual(postInstance);
    });
  });
});
