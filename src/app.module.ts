import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'machines',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2019ubt1084',
      database: 'machines',
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
