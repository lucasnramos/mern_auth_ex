async function userRoutes(fastify, options) {
  const { sqlite } = fastify;

  fastify.get("/users", async (req, res) => {
    const data = sqlite.exec("select * from users");

    if (!data) {
      return { message: "Error: users not found" };
    }

    return data;
  });

  fastify.get("/auth", async (req, res) => {});
}

export default userRoutes;
