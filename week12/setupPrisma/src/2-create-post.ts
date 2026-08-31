import { prisma } from "./lib/prisma.js";

// model Post {
//   id        String     @id @default(cuid())
//   title     String
//   content   String?
//   published Boolean    @default(false)
//   viewCount Int        @default(0)
//   createdAt DateTime   @default(now())
//   updatedAt DateTime   @updatedAt
//   authorId  String
//   author    User       @relation(fields: [authorId], references: [id], onDelete: Cascade)
//   tags      Tag[]
// }

async function main(){
    await prisma.post.create({
        data: {
            title: "test post title",
            content: "Something testing",
            // authorId: 1
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