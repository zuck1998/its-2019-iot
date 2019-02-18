const fastify = require('fastify')({ 
    logger: true, 
    ignoreTrailingSlash: true 
});


fastify.get('/', async (request, reply) => {
    return { name: 'Andrea', surname: 'Dottor' };
  });

fastify.get('/api/products', async (request, reply) => {
    var list = new Array();
    list.push({id: 1, name: "Prodotto 1"});
    list.push({id: 2, name: "Prodotto 2"});
    list.push({id: 3, name: "Prodotto 3"});
    list.push({id: 4, name: "Prodotto 4"});
    
    return list;
  });

  fastify.post('/api/products', async (request, reply) => {
    var product = request.body;
    console.log(product);
    reply.status(201).send();
  });


// Run the server!
const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()