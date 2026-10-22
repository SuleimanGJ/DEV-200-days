import { Hono } from "hono";
import { prisma } from "./lib/prisma.js";

// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { PrismaClient } from "./generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

import dotenv from "dotenv";
dotenv.config();


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();



app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/api/v1/signup", async (c) => {
  // c.text(c.env.DATABASE_URL);

  // const prisma = new PrismaClient({
  //   // datasourceUrl: c.env?.DATABASE_URL,
  //   connectionString: c.env?.DATABASE_URL
  // }).$extends(withAccelerate());

//   const adapter = new PrismaPg({ 
//   connectionString: process.env.DATABASE_URL 
// });

// const prisma = new PrismaClient({ adapter });


const body = await c.req.json();
console.log(body);
try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    c.text("User signed up");
  } catch (error) {
    console.log(error);
    c.status(411);
    return c.text("User already exists");
  }

prisma.$disconnect();

  // c.text("hono");
});

// app.post("/api/v1/signin", (c) => {});
// app.post("/api/v1/blog", (c) => {});
// app.put("/api/v1/blog", (c) => {});
app.get("/api/v1/blog", async (c) => {
  const users = await prisma.user.findMany();
  return c.json(users);
});
// app.get("/api/v1/blog/:id", (c) => {});

export default app;
