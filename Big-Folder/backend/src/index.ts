import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { PrismaClient } from './generated/prisma/index.js';
import { cors } from 'hono/cors';

const app = new Hono();
export const prisma = new PrismaClient();

app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

app.get('/todos', async (c) => {
  const todos = await prisma.todo.findMany();
  return c.json(todos);
});

app.post('/todos', async (c) => {
  const body = await c.req.json();
  if (!body.name) {
    return c.json({ error: 'Name is required' }, 400);
  }
  const todo = await prisma.todo.create({
    data: {
      name: body.name,
      success: false,
    },
  });
  return c.json(todo);
});

app.put('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();

  const todo = await prisma.todo.update({
    where: { id },
    data: {
      name: body.name,
      success: body.success,
    },
  });
  return c.json(todo);
});

app.delete('/todos/:id', async (c) => {
  const id = Number(c.req.param('id'));

  await prisma.todo.delete({
    where: { id },
  });
  return c.json({ message: 'Todo deleted' });
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`🚀 Server is running at http://localhost:${info.port}`);
  }
);