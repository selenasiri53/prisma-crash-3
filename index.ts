import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Prisma Queries
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'John Doe',
    //         email: 'john@email.com',
    //     },
    // });
    // console.log(user);

    // Get all users
    // const users = await prisma.user.findMany();
    //console.log(users);

    // Create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Johns First Article',
    //         body: 'Johns First article body',
    //         // based on the relation created in article model
    //         author: {
    //             connect: {
    //                 id: 1,
    //             },
    //         },
    //     },
    // });

    // console.log(article)

    // Get all articles
    const articles = await prisma.article.findMany()

    // console.log(articles)

    // create a user + article & associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sara Smith',
    //         email: 'sara@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Saras First Article',
    //                 body: 'This is saras first article'
    //             }
    //         }
    //     }
    // });
    // console.log(user)

    console.log(articles)

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect();
        process.exit(1);
    })