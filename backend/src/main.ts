import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('SE104')
    .setDescription('Student Management System API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

// supabase & mail
// email: Se104.uit.2024@gmail.com
// password: Se104.uit.2024@gmail.com.Se104.uit.2024@gmail.com

// database
// user: postgres
// password: Se104-uit-@

// postman: https://app.getpostman.com/join-team?invite_code=306cc7c6aef7038a1306120044ed6e5b&target_code=6668d4c74dc3c89883b5774ee22a6115