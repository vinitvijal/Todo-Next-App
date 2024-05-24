import Image from "next/image";
import { Book, Search, SearchIcon } from "lucide-react";
import Header from "@/components/Header";
import CreateTodo from '../components/CreateTodo';
export default function Home() {
  return (
   <main className=" min-h-screen">
      <Header />
      <div className=" grid grid-cols-4 m-auto gap-10 pt-28 p-10 ">
        <CreateTodo />
        <CreateTodo />
        <CreateTodo />
        <CreateTodo />
        <CreateTodo />

      </div>
   </main>
  );
}
