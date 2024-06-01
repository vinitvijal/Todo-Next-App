'use server'

import { randomUUID } from 'crypto';
// const prisma = new PrismaClient()
import prisma from '../db'

export async function FetchListsById(userId: string) {
    const allList = await prisma.listTable.findMany({
        where: {
            userId: userId
        }
    })

    return allList;
}

export async function AddNewList(userId: string, listName: string) {
    const newList = await prisma.listTable.create({
        data: {
            userId: userId,
            listId: randomUUID().toString(),
            listName: listName
        }
    })

    return newList ? "success" : "failed";
}