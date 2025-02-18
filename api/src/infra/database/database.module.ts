import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Query } from '../../domain/entities/query.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Query],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Query]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
