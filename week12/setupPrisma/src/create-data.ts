import { prisma } from "./lib/prisma.js"

async function main(){
    // const createMany = await prisma.user.createMany({
    // data: [
    //     { name: "Bob", email: "bob@prisma.io" },
    //     { name: "Yewande", email: "yewande@prisma.io" },
    // ],
    // skipDuplicates: true, // Skip records with duplicate unique fields
    // });
    // console.log(createMany);
    // Returns: { count: 2 }

    // Create and return multiple records
    // Supported by PostgreSQL, CockroachDB, and SQLite.


    const usersReturn = await prisma.user.createManyAndReturn({
    data: [
        { name: "Abdi", email: "Abdi@prisma.io" },
        { name: "Moh", email: "Moh@prisma.io" },
    ],
    });
    console.log(usersReturn);
}

main()
.then(async ()=> {
    prisma.$disconnect();
})
.catch(async (e) => {
    console.log(e);
    prisma.$disconnect();
    process.exit(1);
});