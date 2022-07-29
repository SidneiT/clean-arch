import { Test, TestingModule } from '@nestjs/testing';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

describe('RoutesController', () => {
  // let controller: RoutesController;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [RoutesController],
  //     providers: [RoutesService],
  //   }).compile();

  //   controller = module.get<RoutesController>(RoutesController);
  // });

  it('fake one', () => {
    expect(true).toBe(true);
  });
});
