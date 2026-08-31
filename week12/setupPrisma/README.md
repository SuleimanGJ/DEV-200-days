## Prisma Configurations
link 
```
https://www.prisma.io/docs/v7/prisma-orm/add-to-existing-project/postgresql

```

Step 1: Initialize Project & Install Dependencies 

npm init -y

npm i typescript ts-node dotenv @types/dotenv @types/node --save-dev

npx tsc --init or tsc --init

inside tsconfig.json add this

  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "vite.config.ts",
    "jest.config.ts",
    "vitest.config.ts"
  ]


Update package.json to enable ESM:
package.json

{
  "type": "module"
}


npm i prisma @types/pg --save-dev

npm i @prisma/client @prisma/adapter-pg pg



Step 2: Initialize Prisma

Run the initialization command. Specifying postgresql as the datasource provider automatically scaffolds the configuration specifically for Postgres.

And check this inside schema.prisma

generator client {
  provider = "prisma-client"
}


npx prisma init --datasource-provider postgresql

Use code with caution.This command creates a few foundational files in your project directory:
A prisma/ folder containing your schema.prisma file.
A prisma.config.ts configuration file.
A .env file at the root level to securely house your database credentials.


Step 3: Configure your Connection String

Open the newly created .env file and replace the boilerplate string with your actual PostgreSQL connection details

DATABASE_URL="postgresql://user:password@host:port/database"



Step 4: Define your Data SchemaOpen prisma/schema.prisma.

Ensure your database provider blocks look like the block below, and add the data models (tables) you want to build.



Step 5: Run Migrations & Generate Client

Once your schema is set, synchronize it with your actual PostgreSQL database.
This step creates the physical tables in Postgres and generates the TypeScript types for your Prisma Client.
Use Prisma Migrate to create and apply migrations:

npx prisma migrate dev --name init




Step 6. Generate Prisma ORM types
Generate Prisma Client based on your introspected schema:

npx prisma generate


This creates a type-safe Prisma Client tailored to your database schema in the generated/prisma directory.



Step 7. Instantiate and Use Prisma Client

Create a utility file to instantiate Prisma Client. You need to pass an instance of the Prisma ORM driver adapter adapter to the PrismaClient constructor:

You can now import and use the Prisma Client anywhere in your application backend to safely read and write data.

lib/prisma.ts

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };


Step 7. Add data to your database

create-user.ts


import { prisma } from "./lib/prisma.js";

async function main(){
    await prisma.user.create({
        data: {
            email: "test@gmail.com",
            name: "test"
        }
    })
}

main()
.then(async ()=> {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.log(e)
    await prisma.$disconnect();
    process.exit(1);
})



Step 9. Query your database
Now you can use Prisma Client to query your database. Create a script.ts file:

script.ts

import { prisma } from "./lib/prisma";
async function main() {
  // Example: Fetch all records from a table
  // Replace 'user' with your actual model name
  const allUsers = await prisma.user.findMany();
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });




Step 10. Evolve your schema

To make changes to your database schema:

10.1. Update your Prisma schema file
Update your Prisma schema file to reflect the changes you want to make to your database schema. For example, add a new model:


10.2. Create and apply a migration:

npx prisma migrate dev --name your_migration_name

This command will:

Create a new SQL migration file
Apply the migration to your database
Regenerate Prisma Client



Step 11. Explore your data with Prisma Studio

npx prisma studio