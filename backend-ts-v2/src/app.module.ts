import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './modules/student/student.module';
import { ClassModule } from './modules/class/class.module';
import { ChitietdslopModule } from './modules/chitietdslop/chitietdslop.module';
import { BaocaoModule } from './modules/baocao/baocao.module';
import { ThamsoModule } from './modules/thamso/thamso.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    StudentModule,
    ClassModule,
    ChitietdslopModule,
    BaocaoModule,
    ThamsoModule,
  ],
})
export class AppModule {}
