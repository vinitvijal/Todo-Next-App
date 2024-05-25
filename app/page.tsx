import Header from "@/components/Header";
import CreateTodo from '../components/CreateTodo';
import Todo from "@/components/Todo";
import { FetchTodo } from "@/actions/addTodo";
export const dynamic = 'force-dynamic'


export default async function Home() {
  const allUsers = await FetchTodo();

  return (
   <main className=" min-h-screen bg-white">
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
