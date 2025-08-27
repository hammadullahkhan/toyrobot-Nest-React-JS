Server (NestJS)

Tech
- NestJS v9, TypeORM, SQLite

Install
```
npm install
```

Run (dev)
```
npm run start:dev
```

Test
```
npm test
```

Environment
- DB file: `../DATA/robot.db` (configured via `join(process.cwd(), 'DATA', 'robot.db')`)

Structure
```
src/
  controllers/
    robot.controller.ts
  entities/
    robot.entity.ts
  services/
    robot.service.ts
    robot.service.spec.ts
  app.module.ts
  main.ts
```

API endpoints
- POST `/robot/place` { x, y, facing }
- POST `/robot/move`
- POST `/robot/left`
- POST `/robot/right`
- GET `/robot/report`


