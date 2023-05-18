import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3333;

app.get('/users', async () => {
    const users = await prisma.user.findMany()
    return users
})

app.listen(PORT, () => {
    console.log('servidor iniciado na porta ' + PORT)
  });