import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as ejs from 'ejs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  app.engine('ejs', ejs.renderFile);

  app.setBaseViewsDir(path.join(path.resolve("src"), 'usuarios', 'views/'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
