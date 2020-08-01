import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CommentsService } from './comments.service';
import { Comment } from '../entities';

let mockCommentsRepository = {
  save: (_: any) => {}
}

let commentInstance: Comment;
const CommentsRepositoryProvider = getRepositoryToken(Comment);

describe('CommentsService', () => {
  let service: CommentsService;
  let commentsRepository: any;
  let appModule: TestingModule;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: CommentsRepositoryProvider,
          useValue: mockCommentsRepository
        }
      ],
    }).compile();

    service = await appModule.resolve<CommentsService>(CommentsService);
    commentsRepository = appModule.get(CommentsRepositoryProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addComment', () => {
    beforeEach(() => {
      jest.spyOn(commentsRepository, 'save').mockImplementation(async () => commentInstance);
    })

    afterEach(() => {
      jest.spyOn(commentsRepository, 'save').mockReset();
    })

    let commentAttrs = {
      postId: 'uuid-sample',
      content: 'Lorem ipsum'
    }

    it('should call commentsRepository to save comment into database', async () => {
      await service.addComment(commentAttrs);
      expect(commentsRepository.save).toHaveBeenCalledWith(commentAttrs);
    });
  });
});
