import { CircularProgress } from '@nextui-org/react'
import React from 'react'

function loading() {
  return (
    <div className=' h-screen w-full flex justify-center items-center flex-col'>
      <CircularProgress size={'lg'} />
      <h1 className=' mt-10 text-xl font-semibold'>Todo is Loading...</h1>
    </div>
  )
}

export default loading
