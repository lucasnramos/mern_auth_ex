import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";
import fastifySqlite from "./db/sqlite.js";
import { migrateUsers } from "./db/migrations.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifySqlite, { fileName: "test.db" });
fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    await migrateUsers();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
