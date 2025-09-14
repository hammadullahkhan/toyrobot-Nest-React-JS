import { Component } from '@angular/core';
import { RobotApiService, RobotState } from './services/robot-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  robot: RobotState | null = null;
  reportText: string = '';

  constructor(private robotApi: RobotApiService) {
    this.loadRobot();
  }

  loadRobot() {
    this.robotApi.report().subscribe(state => {
      this.robot = state;
      this.reportText = `(${state.x}, ${state.y}, ${state.facing})`;
    });
  }

  onPlace(event: { x: number; y: number; facing: string }) {
    this.robotApi.place(event.x, event.y, event.facing).subscribe(state => {
      this.robot = state;
      this.reportText = '';
    });
  }

  onMove() {
    this.robotApi.move().subscribe(state => {
      this.robot = state;
      this.reportText = '';
    });
  }

  onLeft() {
    this.robotApi.left().subscribe(state => {
      this.robot = state;
      this.reportText = '';
    });
  }

  onRight() {
    this.robotApi.right().subscribe(state => {
      this.robot = state;
      this.reportText = '';
    });
  }

  onReport() {
    this.robotApi.report().subscribe(state => {
      this.robot = state;
      this.reportText = `(${state.x}, ${state.y}, ${state.facing})`;
    });
  }
}