import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RobotState {
  x: number;
  y: number;
  facing: string;
}

@Injectable({ providedIn: 'root' })
export class RobotApiService {
  private apiUrl = 'http://localhost:3001/api/robot';

  constructor(private http: HttpClient) {}

  place(x: number, y: number, facing: string): Observable<RobotState> {
    return this.http.post<RobotState>(`${this.apiUrl}/place`, { x, y, facing });
  }

  move(): Observable<RobotState> {
    return this.http.post<RobotState>(`${this.apiUrl}/move`, {});
  }

  left(): Observable<RobotState> {
    return this.http.post<RobotState>(`${this.apiUrl}/left`, {});
  }

  right(): Observable<RobotState> {
    return this.http.post<RobotState>(`${this.apiUrl}/right`, {});
  }

  report(): Observable<RobotState> {
    return this.http.get<RobotState>(`${this.apiUrl}/report`);
  }
}
