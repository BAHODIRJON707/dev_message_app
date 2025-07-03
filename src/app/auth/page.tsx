import React from 'react'
import StateAuth from './_components/state'
import Social from './_components/social'
import { GiUnfriendlyFire } from 'react-icons/gi'

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className='container max-w-md h-screen flex justify-center items-center flex-col space-y-2 bg-blue-100'>
            <GiUnfriendlyFire size={120} className='text-blue-500' />
            <div>
            <h1 className="text-4xl font-bold text-center text-gray-900">Dev App</h1>
            </div>
            <p className="text-center text-sm text-gray-700 max-w-xs">
            Dev App is a messaging app with a focus on speed and security. It's super fast, simple, and free.
            </p>
        <StateAuth />
        <p>or</p>
        <Social />
        </div>
    </div>
  )
}

export default page