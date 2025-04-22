import { serve } from '@hono/node-server'
import { Hono, type Context, type Next } from 'hono'
import { logger } from 'hono/logger'
import { type } from 'os';
import { todo } from 'node:test';

type Variables = {
  id: number;
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: 1, title: 'Learn Hono', completed: false}, {id: 2, title: 'Build a REST API', completed: false},
];

const app = new Hono<{Variables: Variables}>()

app.use('*', logger());

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

async function timerMinddleware(c: Context, next: Next) {
  const start = Date.now();
  console.log('Record star time');
  await next();
  console.log('Controller finished');
  const time = Date.now() - start;
  console.log(c.req.path + 'Takes' + time + 'ms');
}

app.get('/todos', (c) => {
  return c.json({success: true, data: todos, msg: 'Successfully get todos',});
});

app.get('/todos/count', (c) => {
  return c.json({
    number: todos.length
  })
});

async function validateParamId(c: Context, next: Next) {
  const idParam = c.req.param('id');
  if(!/^\d+$/.test(idParam)){
    return c.json({
      success: false, msg: 'Invalid Param',
    });
  }
  c.set('id', idParam);
  await next();  
}

app.get('/todos/:id', (c) => {
  const idParam = c.req.param('id');
  if(!/^\d+$/.test(idParam)){
    return c.json({
      success: false, msg: 'Invalid Param',
    });
  }

  const id = parseInt(idParam);
  const todo = todos.find((todo) => todo.id === id);
  if(todo !== undefined) {
    return c.json({
      success: true, data: todo, msg: 'Todo Found!!'
    });
  }
  return c.json({
    sucess: false, msg: 'Todo not found!'
  })
});

type createTodoBody = {
  title: string;
};

app.post('/todos', async (c) => {
  try {
      const body: createTodoBody = await c.req.json();
      if (!body.title) {
          return c.json({ success: false, msg: 'Missing required field' });
      }
      let lastMaxId: number = 0;
      // Find last Max ID
      todos.forEach((todo) => (lastMaxId = Math.max(lastMaxId, todo.id)));
      // Create new todo
      const newTodo: Todo = { id: lastMaxId + 1, title: body.title, completed: false };
      //push new todo in to todos list
      todos.push(newTodo);
      // return a success response
      return c.json({
          success: true,
          data: newTodo,
          msg: 'Done creating new todo',
      });
  } catch (e: any) {
      return c.json({
          success: false,
          msg: e.toString(),
      });
  }
});

app.patch('/todos/done', async (c) => {
  try {
    const id = c.req.query('id');
    if (!id) {
      return c.json("Missing required field");
    }
    if (!/^\d+$/.test(id)) {
      return c.json('Invalid varible type');
    }
    todos.forEach((todo) => {
      if(todo.id === parseInt(id)){ todo.completed = true; }
    });
    return c.json({ success: true, msg: 'Updated todo successfully'});
  } catch (e: any) {
    return c.json({
      success: false,
      msg: e.toString(),
    });
  }
});

app.delete('/todos/:id', async (c) => {
  try {
    const idParam = c.req.param('id');
    if (!/^\d+$/.test(idParam)) return c.json('id is not a number!!!');
    const id = parseInt(idParam);
    const index = todos.findIndex((todo) => todo.id === id);
    if(index == -1) {
      return c.json ({
        success: false,
        msg: 'todo not found',
      });
    }
    const selectedTodo = todos[index];
    todos.splice(index, 1);
    
    return c.json({ 
      success: true,
      data: selectedTodo, 
      msg: 'Successfully deleted todo',
    });
  } catch (e: any) {
    return c.json({
      success: false,
      msg: e.toString(),
    });
  }
});
  
serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
