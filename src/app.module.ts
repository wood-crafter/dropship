import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CheckRightsMiddleware } from './check-rights/check-rights.middleware';

@Module({
  imports: [AuthModule, UsersModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckRightsMiddleware)
      .forRoutes({ path: 'protected', method: RequestMethod.ALL });
  }
}
