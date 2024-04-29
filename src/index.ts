import fastify from 'fastify'
import JSZip from 'jszip';


const server = fastify()
const zip = new JSZip();

server.get('/ping', async (request, reply) => {
    console.log(request);
    console.log(reply);
    return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})