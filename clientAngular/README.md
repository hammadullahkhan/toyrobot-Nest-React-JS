# Toy Robot Simulator (Angular)

This is the Angular client for the Toy Robot Simulator project. It provides a web interface to control a toy robot on a 5x5 grid, communicating with the backend NestJS API.

## Features
- Place the robot on the grid
- Move, rotate (left/right), and report the robot's position
- Prevents the robot from falling off the grid
- Real-time sync with backend
- Keyboard and button controls

## Getting Started

### Install dependencies
```
npm install
```

### Start the Angular client
```
npm start
```
The app will be available at [http://localhost:4200](http://localhost:4200)

### Backend
Make sure the backend server is running (see main project README).

## Project Structure
- `src/app/components/grid` — Grid display component
- `src/app/components/controls` — Controls for robot commands
- `src/app/components/robot` — Robot icon component
- `src/app/services/robot-api.service.ts` — API service for backend communication
- `src/app/app.component.ts` — Main app logic

## API Endpoints
- `POST /api/robot/place` — Place robot
- `POST /api/robot/move` — Move robot
- `POST /api/robot/left` — Rotate left
- `POST /api/robot/right` — Rotate right
- `GET /api/robot/report` — Get robot position

## License
MIT
