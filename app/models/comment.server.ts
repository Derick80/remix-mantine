import { prisma } from './prisma.server'


export async function createComment({ postId, body, authorId }: { postId: string, body: string, authorId: string }) {
    const comment = await prisma.comment.create({
        data: {
            body,
            authorId,
            postId,
        },
    });
    return comment;
}
