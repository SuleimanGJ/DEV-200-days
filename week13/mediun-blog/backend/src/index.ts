import { Hono } from 'hono'

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { env } from "prisma/config";
const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.post("/api/v1/signup", (c) => {

})
app.post("/api/v1/signin", (c) => {

})
app.post("/api/v1/blog", (c) => {

})
app.put("/api/v1/blog", (c) => {

})
app.get("/api/v1/blog", (c) => {
  
})
app.get("/api/v1/blog/:id", (c) => {
  
})

export default app
