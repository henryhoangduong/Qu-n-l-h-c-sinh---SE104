import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entitie/entities/Student';
import { StudentClass } from 'src/entitie/entities/StudentClass';
import { Exam } from 'src/entitie/entities/Exam';
import { Teacher } from 'src/entitie/entities/Teacher';
import { Subject } from 'src/entitie/entities/Subject';
import { Class } from 'src/entitie/entities/Class';
import { Grade } from 'src/entitie/entities/Grade';
import { SubjectClass } from 'src/entitie/entities/SubjectClass';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        username: configService.getOrThrow('DB_USER'),
        password: configService.getOrThrow('DB_PASSWORD'),
        database: 'postgres',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        dropSchema: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      Student,
      StudentClass,
      Exam,
      Subject,
      Teacher,
      Class,
      Grade,
      SubjectClass,
    ]),
  ],
})
export class DatabaseModule {}
