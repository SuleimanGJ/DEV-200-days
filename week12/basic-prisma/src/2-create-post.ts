import { prisma } from "./lib/prisma.js"


async function main() {
    await prisma.post.create({
    data: {
     title: "title of post",
     author: {
        connect: {
            id: 1
        }
     }
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
