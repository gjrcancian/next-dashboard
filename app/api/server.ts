import { fastify } from "fastify";
import { fastifyCors } from '@fastify/cors'
import { prisma } from '../app/lib/prisma'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.get('/', () => {
const user = prisma.user.findMany();
console.log(user);
return user;
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})