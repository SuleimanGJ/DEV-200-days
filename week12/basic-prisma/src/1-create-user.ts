




// The bigger issue: dist doesn't contain the generated client
// could not find the module coz ../src/generated/prisma/client.js doesnot exit
// import { PrismaClient } from "../src/generated/prisma/client.js";

import { prisma } from "./lib/prisma.js";

// solution is
// to get module ./generated/prisma/client.js coz in side dist it exists



async function main() {
    await prisma.user.create({
        data: {
            email: "suleiman@gmail.com",
            name: "suleiman"
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
