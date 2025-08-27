import { Controller, Post, Get, Body } from '@nestjs/common';
import { RobotService } from '../services/robot.service';

@Controller('robot')
export class RobotController {
  constructor(private readonly robotService: RobotService) {}

  @Post('place')
  async place(
    @Body('x') x: number,
    @Body('y') y: number,
    @Body('facing') facing: string
  ) {
    return await this.robotService.placeRobot(x, y, facing);
  }

  @Post('move')
  async move() {
    return await this.robotService.moveRobot();
  }

  @Post('left')
  async left() {
    return await this.robotService.rotateLeft();
  }

  @Post('right')
  async right() {
    return await this.robotService.rotateRight();
  }

  @Get('report')
  async report() {
    return await this.robotService.report();
  }
}