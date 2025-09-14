import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Output() place = new EventEmitter<{ x: number; y: number; facing: string }>();
  @Output() move = new EventEmitter<void>();
  @Output() left = new EventEmitter<void>();
  @Output() right = new EventEmitter<void>();
  @Output() report = new EventEmitter<void>();

  x = 0;
  y = 0;
  facing = 'NORTH';

  onPlace() {
    this.place.emit({ x: this.x, y: this.y, facing: this.facing });
  }
}
