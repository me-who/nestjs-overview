import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CrmModule } from './crm/crm.module';
import { TraceIdMiddleware } from './middleware/trace-id.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResInterceptor } from './interceptor/res.interceptor';

@Module({
  imports: [UserModule, CrmModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResInterceptor,
    },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TraceIdMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
