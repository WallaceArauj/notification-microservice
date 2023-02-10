import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { HttpModule } from './mail/http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostmarkMailService
    }],
})
export class AppModule { }
