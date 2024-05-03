/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as express from 'express'
// import { MainRouter } from './router/MainRouter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors();
  app.use(express.static('.'))
  // MainRouter()

  const config = new DocumentBuilder()
  .setTitle('Post it now')
  .setDescription('All post it now API')
  .setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000)
}
bootstrap()
