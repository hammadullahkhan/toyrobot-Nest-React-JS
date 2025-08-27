import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RobotService } from './robot.service';
import { Robot } from '../entities/robot.entity';
import { Repository } from 'typeorm';

describe('RobotService', () => {
  let service: RobotService;
  let repo: Repository<Robot>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RobotService,
        {
          provide: getRepositoryToken(Robot),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RobotService>(RobotService);
    repo = module.get<Repository<Robot>>(getRepositoryToken(Robot));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should place robot at (0,0,NORTH)', async () => {
    jest.spyOn(repo, 'update').mockResolvedValue({} as any);
    jest.spyOn(repo, 'create').mockReturnValue({ x: 0, y: 0, facing: 'NORTH', isActive: true } as Robot);
    jest.spyOn(repo, 'save').mockResolvedValue({ x: 0, y: 0, facing: 'NORTH', isActive: true } as Robot);

    const robot = await service.placeRobot(0, 0, 'NORTH');
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
    expect(robot.facing).toBe('NORTH');
    expect(robot.isActive).toBe(true);
  });
});
