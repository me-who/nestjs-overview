import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CrmModule } from './crm/crm.module';

@Module({
  imports: [UserModule, CrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
