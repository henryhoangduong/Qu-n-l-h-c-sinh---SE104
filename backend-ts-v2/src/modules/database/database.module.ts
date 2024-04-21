import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Bangdiemmon,
  Baocaotongkethocki,
  Baocaotongketmon,
  Chitietbangdiemmon,
  Chitietdiemloaihinhkiemtra,
  Chitietdslop,
  Hocki,
  Chitiettongketmon,
  Khoilop,
  Hocsinh,
  Loaihinhkiemtra,
  Lop,
  Monhoc,
  Namhoc,
  Thamso,
} from '../../entities';
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
        dropSchema: false,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      Bangdiemmon,
      Baocaotongkethocki,
      Baocaotongketmon,
      Chitietbangdiemmon,
      Chitietdiemloaihinhkiemtra,
      Chitietdslop,
      Hocki,
      Chitiettongketmon,
      Khoilop,
      Hocsinh,
      Loaihinhkiemtra,
      Lop,
      Monhoc,
      Namhoc,
      Thamso,
    ]),
  ],
})
export class DatabaseModule {}
