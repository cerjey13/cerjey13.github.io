import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY)
    private readonly configService: ConfigType<typeof config>,
    @Inject('TASKS') private readonly tasks: any[],
  ) {}

  getHello(): any {
    return {
      database: this.configService.database.dbName,
      databasePort: this.configService.database.dbPort,
      message: this.tasks,
    };
  }
}
