import { APP_GUARD } from '@nestjs/core';
import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';

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
    forwardRef(() => UserModule), forwardRef(() => AuthModule)],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule { }
