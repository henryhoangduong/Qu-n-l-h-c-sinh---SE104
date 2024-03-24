import { DataSource } from 'typeorm';
import 'dotenv/config';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: false,
  logging: true,
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
