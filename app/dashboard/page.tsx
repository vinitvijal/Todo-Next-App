import { FetchListsById } from '@/actions/Lists';
import LeftDash from '@/components/LeftDash'
import RightDash from '@/components/RightDash'
import { RedirectToSignIn } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

function page() {

  return (
        <RightDash />
  )
}

export default page
