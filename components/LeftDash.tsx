import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function LeftDash() {
  return (
    <section className=' w-1/5 border flex flex-col'>
        <div className=' w-full flex justify-evenly items-center flex-col '>
            <img src='/TADA.svg' alt='TADA' className='w-full h-20 object-cover'/>
        </div>
        <div className=' flex justify-center '>
            <SignedIn>
                <div className=' w-[96%] border p-2'>
                    <UserButton/>
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </div>
    </section>
  )
}

export default LeftDash
