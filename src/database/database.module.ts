import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, pass, host, dbName, dbPort } = configService.postgres;
        return {
          type: 'postgres',
          username: user,
          host,
          database: dbName,
          port: dbPort,
          password: pass,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
      inject: [config.KEY],
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { dbName, user, pass, host, dbPort, connection } =
          configService.database;
        return {
          uri: `${connection}://${host}:${dbPort}`,
          user,
          pass,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: [MongooseModule, TypeOrmModule],
})
export class DatabaseModule {}
