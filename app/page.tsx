import Image from "next/image";
import { Book, Search, SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import CreateTodo from '../components/CreateTodo';
import Todo from "@/components/Todo";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function Home() {
  const allUsers = await prisma.todo.findMany()
  return (
   <main className=" min-h-screen">
      <Header />
      <div className=" grid grid-cols-4 m-auto gap-10 min-h-screen pt-28 p-10 ">
        <CreateTodo />
        {allUsers &&
          allUsers.map((todo) => (
            <Todo key={todo.id} props={todo} />
          ))
        }

      </div>
   </main>
  );
}
