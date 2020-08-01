import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { Author } from '../entities';

let mockAuthorsRepository = {
  findOne: (_: any) => {}
}

let authorInstance: Author;
const AuthorsRepositoryProvider = getRepositoryToken(Author);

describe('AuthorsService', () => {
  let service: AuthorsService;
  let authorsRepository: any;
  let appModule: TestingModule;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      providers: [
        AuthorsService,
        {
          provide: AuthorsRepositoryProvider,
          useValue: mockAuthorsRepository
        }
      ],
    }).compile();

    service = await appModule.resolve<AuthorsService>(AuthorsService);
    authorsRepository = appModule.get(AuthorsRepositoryProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find', () => {
    beforeEach(() => {
      jest.spyOn(authorsRepository, 'findOne').mockImplementation(async () => authorInstance);
    })

    afterEach(() => {
      jest.spyOn(authorsRepository, 'findOne').mockReset();
    })

    let authorId = 'uuid-sample';

    it('should call authorsRepository to find author on database', async () => {
      await service.find(authorId);
      expect(authorsRepository.findOne).toHaveBeenCalledWith(authorId);
    });
  });
});
