import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './resource/auth/auth.module';
import { ProfileModule } from './resource/profile/profile.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './resource/auth/jwt.constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './resource/auth/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-ap-southeast-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.evonpqehqaimyiygefhp',
      password: 'Se104-uit-@',
      database: 'postgres',
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiredTime, algorithm: jwtConstants.algorithm },
    }),
    AuthModule,
    ProfileModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}