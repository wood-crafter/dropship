import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { User } from '../common/type';

@Injectable()
export class CheckRightsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user = req.user as User;
    if (!user || !user.roles.includes('admin')) {
      throw new UnauthorizedException('Insufficient permissions');
    }
    next();
  }
}
