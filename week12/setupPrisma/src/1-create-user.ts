import { prisma } from "./lib/prisma.js";


async function main(){
    await prisma.user.create({
        // data: {
        //     email: "testOne@gmail.com",
        //     name: "test One"
        // }
        data: {
    email: "elsa@prisma.io",
    name: "Elsa Prisma",
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