import "dotenv/config";
import type { MiddlewareHandler } from "hono";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    // connectionString: process.env.DATABASE_URL,
    connectionString: process.env.DATABASE_URL,
    // Match Prisma ORM v6 defaults:
    connectionTimeoutMillis: 5_000, // v6 connect_timeout was 5s
    idleTimeoutMillis: 300_000, // v6 max_idle_connection_lifetime was 300s
  }),
});

export {prisma}

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