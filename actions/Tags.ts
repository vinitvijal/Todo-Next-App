'use server'
import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function FetchTagsById(userId: string) {
    const tags = await prisma.tags.findMany({
        where: {
            userId: userId
        }
    })
    return tags;
}