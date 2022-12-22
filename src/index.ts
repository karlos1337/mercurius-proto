import { buildApp } from './app';

(async function main() {
  const app = await buildApp({
    logger: {
      level: 'debug',
      transport: { target: '@mgcrea/pino-pretty-compact' },
    },
  });

  app.listen(
    {
      port: Number(process.env.PORT) || 8080,
      host: process.env.HOST || '0.0.0.0',
    },
    (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    },
  );
})();
