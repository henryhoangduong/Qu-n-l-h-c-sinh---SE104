import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './modules/student/student.module';
import { ClassModule } from './modules/class/class.module';
import { ChitietdslopModule } from './modules/chitietdslop/chitietdslop.module';
import { BaocaoModule } from './modules/baocao/baocao.module';
import { ThamsoModule } from './modules/thamso/thamso.module';
import { ScoreModule } from './modules/score/score.module';
import { MonhocModule } from './modules/monhoc/monhoc.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    StudentModule,
    ClassModule,
    ChitietdslopModule,
    BaocaoModule,
    ThamsoModule,
    ScoreModule,
    MonhocModule,
    AuthModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
