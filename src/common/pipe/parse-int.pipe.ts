import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const transform = parseInt(value, 10);
    if (!transform) {
      throw new BadRequestException(`${value} is not a number`);
    }
    return value;
  }
}
