import { prisma } from "./lib/prisma.js"


async function main() {
    // Delete a single record
    // The following query uses delete() to delete a single User record:


    // const deleteUser = await prisma.user.delete({
    // where: {
    //     email: "bert@prisma.io",
    // },
    // });
    // console.log(deleteUser);


//     Delete multiple records
//     The following query uses deleteMany() to delete all User records where email contains prisma.io:

    // const deleteUsers = await prisma.user.deleteMany({
    // where: {
    //     email: {
    //     contains: "prisma.io",
    //     },
    // },
    // });
    // console.log(deleteUsers);

    /* 
    {
        id: 1,
        email: 'bob@prisma.io',
        name: 'Bob',
        createdAt: 2026-08-31T03:54:42.599Z,
        updatedAt: 2026-08-31T03:54:42.599Z
    },
    {
        id: 2,
        email: 'yewande@prisma.io',
        name: 'Yewande',
        createdAt: 2026-08-31T03:54:42.599Z,
        updatedAt: 2026-08-31T03:54:42.599Z
    },
    {
        id: 3,
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
        createdAt: 2026-08-31T03:58:06.964Z,
        updatedAt: 2026-08-31T03:58:06.964Z
    },
    {
        id: 4,
        email: 'Abdi@prisma.io',
        name: 'Abdi',
        createdAt: 2026-08-31T04:02:30.909Z,
        updatedAt: 2026-08-31T04:02:30.909Z
    },
    {
        id: 5,
        email: 'Moh@prisma.io',
        name: 'Viola the Magnificent',
        createdAt: 2026-08-31T04:02:30.909Z,
        updatedAt: 2026-08-31T04:14:47.764Z
    },
    {
        id: 6,
        email: 'suleiman@prisma.io',
        name: 'Suleiman',
        createdAt: 2026-08-31T04:18:02.517Z,
        updatedAt: 2026-08-31T04:18:02.517Z
    },
    */

    // Attempting to delete a user with one or more posts result in an error, as every Post requires an author - see cascading deletes.




    // Delete all records
    // The following query uses deleteMany() to delete all User records:

    // const deleteUsers = await prisma.user.deleteMany({});

    // Be aware that this query will fail if the user has any related records (such as posts). In this case, you need to delete the related records first.






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