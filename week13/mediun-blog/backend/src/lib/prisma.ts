import "dotenv/config";
import type { MiddlewareHandler } from "hono";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
});

export const withPrisma: MiddlewareHandler<{
  Variables: { prisma: PrismaClient };
}> = async (c, next) => {
  c.set("prisma", prisma);
  await next();
};


// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { env } from "prisma/config";
// const prisma = new PrismaClient({
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate())