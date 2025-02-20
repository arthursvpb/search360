import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  try {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: '*',
      methods: 'GET,POST',
      allowedHeaders: 'Content-Type',
    });

    await app.listen(process.env.PORT ?? 3000);
  } catch (error) {
    console.error('❌ Error starting the application:', error);
    process.exit(1);
  }
};

void bootstrap();
