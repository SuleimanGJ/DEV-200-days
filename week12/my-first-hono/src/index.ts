import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  // const body = await c.req.json();
  // console.log(body)
  console.log(c.req.header())
  console.log(c.req.header("Authorization"))
  console.log(c.req)
  return c.text('Hello Hono!')
})

app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body)
  console.log(c.req.header)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))
  console.log(c.req.param("name"))
  console.log(c.req)
  return c.text('Hello Hono!')
})

export default app
