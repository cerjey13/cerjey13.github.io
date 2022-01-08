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
      apiKey: this.configService.apiKey,
      database: this.configService.database.name,
      databasePort: this.configService.database.port,
      message: this.tasks,
    };
  }
}
