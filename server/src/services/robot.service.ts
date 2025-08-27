import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Robot } from '../entities/robot.entity';

@Injectable()
export class RobotService {
  constructor(
    @InjectRepository(Robot)
    private robotRepository: Repository<Robot>,
  ) {}

  // PLACE command: always creates or moves the robot
  async placeRobot(x: number, y: number, facing: string): Promise<Robot> {
    // Deactivate all robots
    await this.robotRepository.update({ isActive: true }, { isActive: false });

    // Clamp x and y to 0-4
    const safeX = Math.max(0, Math.min(4, x));
    const safeY = Math.max(0, Math.min(4, y));
    const safeFacing = ['NORTH', 'EAST', 'SOUTH', 'WEST'].includes(facing) ? facing : 'NORTH';

    const robot = this.robotRepository.create({
      x: safeX,
      y: safeY,
      facing: safeFacing,
      isActive: true,
      action: 'PLACE'
    });

    Logger.log(`Placing robot at ${safeX},${safeY} facing ${safeFacing}`, 'RobotService');
    return this.robotRepository.save(robot);
  }

  // MOVE command: only if robot is placed
  async moveRobot(): Promise<Robot> {
    const robot = await this.getActiveRobot();
    if (!robot) throw new Error('No active robot');

    let newX = robot.x;
    let newY = robot.y;

    switch (robot.facing) {
      case 'NORTH': newY = Math.min(4, robot.y + 1); break;
      case 'SOUTH': newY = Math.max(0, robot.y - 1); break;
      case 'EAST':  newX = Math.min(4, robot.x + 1); break;
      case 'WEST':  newX = Math.max(0, robot.x - 1); break;
    }

    robot.x = newX;
    robot.y = newY;
    robot.action = 'MOVE';
    Logger.log(`Moving robot to ${newX},${newY}`, 'RobotService');
    return this.robotRepository.save(robot);
  }

  // LEFT command: only if robot is placed
  async rotateLeft(): Promise<Robot> {
    const robot = await this.getActiveRobot();
    if (!robot) throw new Error('No active robot');
    const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    const currentIndex = directions.indexOf(robot.facing);
    const newFacing = directions[(currentIndex + 1) % 4];

    robot.facing = newFacing;
    robot.action = 'LEFT';
    Logger.log(`Rotating robot left to face ${newFacing}`, 'RobotService');
    return this.robotRepository.save(robot);
  }

  // RIGHT command: only if robot is placed
  async rotateRight(): Promise<Robot> {
    const robot = await this.getActiveRobot();
    if (!robot) throw new Error('No active robot');
    const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    const currentIndex = directions.indexOf(robot.facing);
    const newFacing = directions[(currentIndex + 1) % 4];

    robot.facing = newFacing;
    robot.action = 'RIGHT';
    Logger.log(`Rotating robot right to face ${newFacing}`, 'RobotService');
    return this.robotRepository.save(robot);
  }

  // REPORT command: only if robot is placed
  async report(): Promise<{ x: number; y: number; facing: string } | null> {
    const robot = await this.getActiveRobot();
    if (!robot) {
      Logger.error('Robot is not placed on the board.', 'RobotService');
      return null;
    }
    Logger.log(`Reporting robot position: ${robot.x},${robot.y},${robot.facing}`, 'RobotService');
    return { x: robot.x, y: robot.y, facing: robot.facing };
  }

  // Only returns robot if placed (active)
  async getActiveRobot(): Promise<Robot | null> {
    let robot = await this.robotRepository.findOne({ where: { isActive: true } });
    if (!robot) {
      // Remove any existing robots
      await this.robotRepository.clear();
      // Place robot at bottom left if not present
      robot = this.robotRepository.create({
        x: 0,
        y: 0,
        facing: 'NORTH',
        isActive: true,
        action: 'PLACE'
      });
      robot = await this.robotRepository.save(robot);
    }
    return robot;
  }
}

// The origin (0,0) is at the SOUTH WEST corner (bottom left)