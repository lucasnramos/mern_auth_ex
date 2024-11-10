/**
 * Creates a fastify plugin for handling sqlite3 datases
 *
 */

import fastifyPlugin from "fastify-plugin";
import sqlite3 from "sqlite3";

function fastifySqlite(fastify, options, done) {
  const connection = new sqlite3.Database(options.fileName);

  // check if the fastify instance has the connection already, if not, set it up
  if (!fastify.sqlite) {
    fastify.decorate("sqlite", connection);
  }

  // hooks to fastify instance so that when it closes, kills db connection and
  // calls done() callback
  fastify.addHook("onClose", (fastify, done) => {
    connection.close();
    done();
  });
  done();
}

export default fastifyPlugin(fastifySqlite, { name: "fastify-sqlite" });
