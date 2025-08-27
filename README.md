# Toy Robot Simulator - Multi-Client Application

A comprehensive Toy Robot Simulator application with React client implementation connected to a shared NestJS backend.

## 🏗️ Architecture Overview

This project demonstrates how to build the same application using different frontend frameworks while sharing a common backend:

- **Backend**: NestJS server with TypeORM and SQLite
- **React Client**: Modern React application with hooks and functional components
- **Shared Database**: SQLite database accessible by all clients

## 📁 Project Structure

```
RoboToyGame-NestReactJS/
├── server/                 # NestJS backend application
│   ├── src/
│   │   ├── controllers/    # API endpoints
│   │   ├── entities/       # Database models
│   │   ├── services/       # Business logic
│   │   └── app.module.ts   # Application configuration
│   └── package.json
├── clientReact/            # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API communication
│   │   └── App.tsx        # Main application
│   └── package.json
├── DATA/                   # Shared SQLite database
└── package.json           # Root package management
```

## Output
<img width="580" height="828" alt="image" src="https://github.com/user-attachments/assets/05566ec1-2040-4424-98c9-f325bc2657ef" />

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd RoboToyGame-NestReactJS
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Start the backend server:**
   ```bash
   npm run start:server
   ```

4. **Start your preferred client:**
   
   **For React:**
   ```bash
   npm run start:clientReact
   # Opens at http://localhost:3000
   ```
   
   **For both clients simultaneously:**
   ```bash
   npm run dev:both
   ```

## 🎮 Features

### Core Functionality
- **5x5 Grid Interface**: Click any cell to place the robot
- **Robot Movement**: MOVE, LEFT, RIGHT commands
- **Position Reporting**: Get current robot coordinates and direction
- **Boundary Validation**: Prevents robot from falling off the table
- **Keyboard Support**: Arrow keys for movement

### Advanced Features

- **Real-time Updates**: Live synchronization with backend
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: CSS transitions for robot movement

## 🔧 Technology Stacks

### Backend (Server)
- **Framework**: NestJS
- **Database**: SQLite with TypeORM
- **Language**: TypeScript
- **Architecture**: MVC pattern with dependency injection

### React Client (clientReact)
- **Framework**: React 18+ with hooks
- **Language**: TypeScript
- **Styling**: CSS modules
- **Testing**: Jest + React Testing Library
- **HTTP**: Axios

## 📱 Client Comparison

| Feature | React Client |
|---------|--------------|----------------|
| Framework | React 18+ |
| Components | Functional with hooks | Standalone components |
| State Management | useState, useEffect | Component properties |
| Event Handling | Props and callbacks | Event binding |
| Styling | CSS modules | Component-scoped CSS |
| Testing | Jest + RTL | Jasmine + Karma |
| Bundle Size | Smaller | Larger (framework overhead) |
| Learning Curve | Easier for beginners | More structured approach |

## 🗄️ Database Schema

The shared SQLite database (`DATA/robot.db`) contains:

```sql
CREATE TABLE robot (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  x INTEGER NOT NULL,
  y INTEGER NOT NULL,
  facing TEXT NOT NULL,
  isActive BOOLEAN DEFAULT true,
  action TEXT NOT NULL,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔌 API Endpoints

All clients connect to the same backend endpoints:

- `GET /robot/report` - Get current robot position
- `POST /robot/place` - Place robot at coordinates
- `POST /robot/move` - Move robot forward
- `POST /robot/left` - Rotate robot left
- `POST /robot/right` - Rotate robot right

## 🧪 Testing

### Backend Tests
```bash
cd server
npm test
```

### React Client Tests
```bash
cd clientReact
npm test
```

## 🚀 Deployment

### Production Builds

**React Client:**
```bash
cd clientReact
npm run build
```

### Backend Deployment
```bash
cd server
npm run build
npm start
```

## 🔍 Development Workflow

1. **Backend First**: Always start with the NestJS server
2. **Database**: Ensure the DATA folder contains the SQLite database
3. **Client Selection**: Choose React based on preference
4. **Testing**: Run tests before committing changes
5. **Synchronization**: All clients share the same backend state

## 🐛 Troubleshooting

### Common Issues

1. **Port Conflicts**
   - Backend: 3000
   - React: 3000 (conflicts with backend)

2. **Database Locking**
   - Stop all running processes before moving database files
   - Ensure only one process accesses the database at a time

3. **CORS Issues**
   - Backend is configured to allow all origins in development
   - Check network tab for failed requests

4. **Component Not Rendering**
   - Check browser console for errors
   - Verify all imports are correct
   - Ensure components are properly exported

### Performance Tips

- Use React.memo() for React components (if needed)
- Debounce frequent API calls
- Optimize CSS animations with will-change property

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain consistency across both clients
3. Write tests for new features
4. Update documentation for changes
5. Test both clients before submitting

## 📄 License

This project is part of the RoboToyGame-NestReactJS application suite.

## 🔗 Related Documentation

- [Server README](./server/README.md)
- [React Client README](./clientReact/README.md)
- [NestJS Documentation](https://nestjs.com/)
- [React Documentation](https://react.dev/)


