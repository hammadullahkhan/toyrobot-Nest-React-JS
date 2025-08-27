import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotController } from './controllers/robot.controller';
import { RobotService } from './services/robot.service';
import { Robot } from './entities/robot.entity';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(process.cwd() + '/../', 'DATA', 'robot.db'),
      entities: [Robot],
      synchronize: true, // Only for development
    }),
    TypeOrmModule.forFeature([Robot]),
  ],
  controllers: [RobotController],
  providers: [RobotService],
})
export class AppModule {}