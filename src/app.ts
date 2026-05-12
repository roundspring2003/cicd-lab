import Fastify, { FastifyServerOptions } from 'fastify';

export function buildApp(options: FastifyServerOptions = {}) {
  const app = Fastify({
    logger: options.logger ?? true,
    ...options
  });

  app.get('/', async () => {
    // Type error: undefinedVariable does not exist
    return undefinedVariable;
  });

  app.get('/health', async () => {
    return {
      status: 'ok'
    };
  });

  return app;
}
