import { FetchListsById } from "@/actions/Lists";
import LeftDash from "@/components/LeftDash";
import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const user = await currentUser();
  if (!user) {
    return <RedirectToSignIn/>;
  }
//   const lists = await FetchListsById(user?.id);
//   console.log(lists)
const lists = [
    {
      userId: 'user_2gzZbem9o6pCIZUkR4SwEvKp9Ao',
      listId: '0e087bb2-3ffc-4410-bfe9-17710b0603a0',
      listName: '🧑‍🎓 College'
    },
    {
      userId: 'user_2gzZbem9o6pCIZUkR4SwEvKp9Ao',
      listId: '7068c33a-0046-440b-8227-7208472f562c',
      listName: 'Breakfast'
    },
    {
      userId: 'user_2gzZbem9o6pCIZUkR4SwEvKp9Ao',
      listId: '12e41a3f-b310-4a12-ac02-490d12811359',
      listName: 'Golgappa'
    },
    {
      userId: 'user_2gzZbem9o6pCIZUkR4SwEvKp9Ao',
      listId: '8f468ef8-8d47-42c1-97b0-f7257f8ed87e',
      listName: 'Momo'
    }
  ]

  return (
    <main className=' h-screen w-full flex bg-white text-black fixed'>
        <LeftDash  lists={lists} />
        {children}
    </main>
  );
}
