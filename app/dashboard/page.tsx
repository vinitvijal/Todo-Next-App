import LeftDash from '@/components/LeftDash'
import RightDash from '@/components/RightDash'
import React from 'react'

function page() {
  return (
    <main className=' h-screen w-full flex bg-white text-black fixed'>
        <LeftDash />
        <RightDash />
    </main>
  )
}

export default page
