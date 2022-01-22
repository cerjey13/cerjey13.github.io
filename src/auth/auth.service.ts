import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { UserPostgres } from 'src/users/entities/user-postgres.entity';
import { PayloadToken } from './models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const data = await this.userService.findByEmailPostgres(email);
    if (data) {
      const isMatch = await bcrypt.compare(password, data.password);
      if (isMatch) {
        // const { password, ...user } = data.toJSON();
        return data;
      }
    }

    return null;
  }

  async generateJWT(user: UserPostgres) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
