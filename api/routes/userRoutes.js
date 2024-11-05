async function userRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'routes file' }
  })
}

export default userRoutes;
