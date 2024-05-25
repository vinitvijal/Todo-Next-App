'use server'
import { PrismaClient, Todo} from '@prisma/client'

const prisma = new PrismaClient()

export default async function addTodo(TodoData: {title: string, content: string, category: string, priority: number}) {
    const {title, content, category, priority} = TodoData

    const newTodo = await prisma.todo.create({
        data: {
            title,
            content,
            category,
            priority,
        }
    })
    return newTodo ? "success" : "failed";
}


export async function FetchTodo() {
    const allUsers = await prisma.todo.findMany()
    return allUsers;
}