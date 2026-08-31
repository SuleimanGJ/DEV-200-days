import { prisma } from "./lib/prisma.js"



async function main() {
    // const updateUser = await prisma.user.update({
    // where: { email: "Moh@prisma.io" },
    // data: { name: "Viola the Magnificent" },
    // });
    // console.log(updateUser)

    // Update and return multiple records
    // Supported by PostgreSQL, CockroachDB, and SQLite.

    // const users = await prisma.user.updateManyAndReturn({
    // where: { email: { contains: "prisma.io" } },
    // data: { role: "ADMIN" },
    // });

    // Upsert (update or create)

    const upsertUser = await prisma.user.upsert({
    where: { email: "suleiman@prisma.io" },
    update: { name: "Suleiman" },
    create: { email: "suleiman@prisma.io", name: "Suleiman" },
    });

    console.log(upsertUser);
    // To emulate findOrCreate(), use upsert() with an empty update parameter.

    // Atomic number operations

    // await prisma.post.updateMany({
    // data: {
    //     views: { increment: 1 },
    //     likes: { increment: 1 },
    // },
    // });
}
main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
})