'use server'
import { PrismaClient} from '@prisma/client'
import { randomUUID } from 'crypto';
import prisma from '../db'


export async function FetchTagsById(userId: string) {
    const tags = await prisma.tags.findMany({
        where: {
            userId: userId
        }
    })
    return tags;
}

export async function AddNewTag(userId: string, tagName: string, tagColor: string) {
    const newTag = await prisma.tags.create({
        data: {
            userId: userId,
            tagId: randomUUID().toString(),
            tagName: tagName,
            tagColor: tagColor
        }
    })
    return newTag ? "success" : "failed";
}

export async function DeleteTagById(userId: string, tagId: string) {
    const tag = await prisma.tags.delete({
        where: {
            tagId: tagId,
            userId: userId
        }
    })
    return tag ? "success" : "failed";
}