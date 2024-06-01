import { FetchListsById } from '@/actions/Lists';
import LeftDash from '@/components/LeftDash'
import RightDash from '@/components/RightDash'
import { RedirectToSignIn } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

async function page() {
  const user = await currentUser();
  if (!user) {
    return <RedirectToSignIn/>;
  }
  const lists = await FetchListsById(user?.id);
  console.log(lists)

  return (
    <main className=' h-screen w-full flex bg-white text-black fixed'>
        <LeftDash  lists={lists} />
        <RightDash />
    </main>
  )
}

export default page
