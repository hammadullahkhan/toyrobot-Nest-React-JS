import axios from 'axios';

const API_BASE = 'http://localhost:3000/robot';

export type RobotState = { x: number; y: number; facing: string };

export async function fetchReport(): Promise<RobotState | null> {
  const response = await axios.get(`${API_BASE}/report`);
  return response.data ?? null;
}

export async function placeRobot(x: number, y: number, facing: string = 'NORTH') {
  const response = await axios.post(`${API_BASE}/place`, { x, y, facing });
  return response.data as RobotState;
}

export async function moveRobot() {
  const response = await axios.post(`${API_BASE}/move`);
  return response.data as RobotState;
}

export async function rotateLeft() {
  const response = await axios.post(`${API_BASE}/left`);
  return response.data as RobotState;
}

export async function rotateRight() {
  const response = await axios.post(`${API_BASE}/right`);
  return response.data as RobotState;
}


