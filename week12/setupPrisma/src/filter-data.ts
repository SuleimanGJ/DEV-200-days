import { prisma } from "./lib/prisma.js"


async function main(){
    // Filter records

    // // Single field filter
    const usersSingleField = await prisma.user.findMany({
    where: { email: { endsWith: "prisma.io" } },
    });
    console.log(usersSingleField)

    // // Multiple conditions with OR/AND
    const usersWithCond = await prisma.user.findMany({
    where: {
        OR: [{ name: { startsWith: "t" } }, { AND: { id: { gt: 1 } } }]
    },
    });

    console.log(usersWithCond)

    // Filter by related records
    const usersByRelatedRecords = await prisma.user.findMany({
    where: {
        email: { endsWith: "prisma.io" },
        posts: { some: { published: false } },
    },
    });

    console.log(usersByRelatedRecords);
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