import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent {
  @Input() facing: string = 'NORTH';
  getIcon(): string {
    switch (this.facing) {
      case 'NORTH': return '⬆️';
      case 'EAST': return '➡️';
      case 'SOUTH': return '⬇️';
      case 'WEST': return '⬅️';
      default: return '🤖';
    }
  }
}
