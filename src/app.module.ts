import { APP_GUARD } from '@nestjs/core';
import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    ConfigModule.forRoot(),//carrega as variáveis de ambiente
    ThrottlerModule.forRoot(
      {
        ttl: 60,//Quantos acesso posso ter nessa quantidade de  segundos
        limit: 10,//limite de requisiçõpes por essa quantidade de tempo
        ignoreUserAgents: [/googlebot/gi]//Ignora o agente do google bot (Dá permissão) 
      },
    ),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'freda67@ethereal.email',
          pass: 'm5yxTW57b5aYtkuehJ'
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: '"Hcode" <freda67@ethereal.email>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    })],

  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule { }
