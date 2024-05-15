import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './constant';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtSecret.secret,
      signOptions: { expiresIn: '3600s' },
    }),
    StudentModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
