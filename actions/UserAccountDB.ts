'use server'
import { PrismaClient} from '@prisma/client'
import { randomUUID } from 'crypto'

// const prisma = new PrismaClient()
import prisma from '../db'



export async function UserExists(userId: string, name: string, email: string) {
    console.log(userId);
    const available = await prisma.user.findUnique({
        where: {
            userId: userId
        }
    })

    if(available){
        return "exists"
    }

    else {
        await prisma.user.create({
            data: {
                userId: userId,
                name: name,
                email: email,
            }
        })

        await prisma.tags.createMany({
            data: [{
                userId: userId,
                tagId: randomUUID().toString(),
                tagName: "Meeting",
                tagColor: "bg-blue-200"
            },
            {
                userId: userId,
                tagId: randomUUID().toString(),
                tagName: "UI",
                tagColor: "bg-green-200"
            },
            {
                userId: userId,
                tagId: randomUUID().toString(),
                tagName: "UX",
                tagColor: "bg-yellow-200"
            },
            {
                userId: userId,
                tagId: randomUUID().toString(),
                tagName: "Development",
                tagColor: "bg-red-200"
            }
        ]
        })
        return "created user"
    }

}

