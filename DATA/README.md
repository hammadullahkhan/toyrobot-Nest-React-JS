DATA

This directory stores runtime data, including the SQLite database file used by the server.

Files
- `robot.db`: SQLite database used by the NestJS server.

Notes
- The server is configured to read the DB from `DATA/robot.db`.
- You can delete `robot.db` to reset state; it will be recreated on next server start (due to TypeORM `synchronize: true` in development).


