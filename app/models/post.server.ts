import { prisma } from './prisma.server'



export async function getPosts(){
const posts = await prisma.post.findMany({
    include: {
        comments: true,
    },
});
return posts;
}