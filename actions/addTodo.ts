'use server'
import { PrismaClient, newTodo as TypeTodo} from '@prisma/client'

// const prisma = new PrismaClient()
import prisma from '../db'

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

export async function addNewTodo(TodoData: {userId: string, name: string, description: string, tag: string, status: string}) {
    const {userId, name, description, tag, status} = TodoData

    const newTodo = await prisma.newTodo.create({
        data: {
            userId,
            name,
            description,
            tag,
            status
        }
    })
    return newTodo ? "success" : "failed";
}


export async function FetchTodo() {
    const allUsers = await prisma.todo.findMany()
    return allUsers;
}

export async function FetchTodoById(userId: string) {
    const todo = await prisma.newTodo.findMany({
        where: {
            userId: userId
        }
    })
    return todo;
}

export async function UpdateDataById(todoId: number, userId: string, tag: string, status: string) {
    const todo = await prisma.newTodo.update({
        where: {
            todoId: todoId,
            userId: userId
        },
        data: {
            status: status,
            tag: tag
        }
    })
    return "success";
}

export async function DeleteDataById(todoId: number) {
    const todo = await prisma.newTodo.delete({
        where: {
            todoId: todoId
        }
    })
    return "success";
}