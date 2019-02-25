const fastify = require('fastify')({ 
    logger: true, 
    ignoreTrailingSlash: true 
});


fastify.get('/api/operations/add', async (request, reply) => {
    let n1 = request.query["num1"];
    let n2 = request.query["num2"];

    let res = parseInt(n1) + parseInt(n2);

    return { result: res };
  });




  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  };
  
  start();