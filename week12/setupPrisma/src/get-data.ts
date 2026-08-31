import { prisma } from "./lib/prisma.js";

async function name() {
    // Read
    // // By unique field
    // const userByUniqueField = await prisma.user.findUnique({
    //   where: { email: "elsa@prisma.io" },
    // });
    // console.log(userByUniqueField)

    // // By ID
    // const userById = await prisma.user.findUnique({
    //   where: { id: 2 },
    // });
    // console.log(userById)

    // // Get all records
    const users = await prisma.user.findMany();
    console.log(users)


}
name()