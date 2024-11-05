import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";

const fastify = Fastify({
  logger: true,
});


/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}

fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
