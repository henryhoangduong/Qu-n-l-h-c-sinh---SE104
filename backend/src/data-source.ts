import { DataSource } from 'typeorm';
import { Account } from './module/auth/entities/account.entity';
import { User } from './module/user/entities/user.entity';
import { faker } from '@faker-js/faker';
import { Role } from './module/user/entities/role';
import { Gender } from './module/user/entities/gender';
import * as bcrypt from 'bcrypt';

const isCreateFakeData = true;

export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',
  port: 5432,
  username: 'postgres.wmnmernievmlbxiyghgq',
  password: 'chưa biết pass huhu D:',
  database: 'postgres',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: isCreateFakeData,
  logging: true,
});

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    if (isCreateFakeData) {
      createSampleUsers();
    }
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

async function createSampleUsers() {
  const accounts: Account[] = [];
  for (let i = 21520000; i < 21523000; i++) {
    const hashedPassword = await bcrypt.hash('password', 10);
    const account = new Account({
      identifierId: i,
      password: hashedPassword,
    });
    const newAccount = await myDataSource.getRepository(Account).save(account);
    accounts.push(newAccount);
  }
  for (const account of accounts) {
    const user = new User({
      account,
      role: Role.Student,
      email: account.identifierId + '@gm.uit.edu.vn',
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: faker.date.past().getTime(),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      gender: faker.helpers.enumValue(Gender),
      avatarUrl: faker.image.avatar(),
    });
    await myDataSource.getRepository(User).save(user);
  }
}
