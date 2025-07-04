import React from 'react'
import StateAuth from './_components/state'
import Social from './_components/social'
import { GiUnfriendlyFire } from 'react-icons/gi'
import { ModeToggle } from '@/components/ui/shared/mode-toggle'

const page = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <div className='container max-w-md h-screen flex justify-center items-center flex-col space-y-2'>
            <GiUnfriendlyFire size={120} />
            <div className='flex items-center gap-2'>
            <h1 className="text-4xl font-bold text-center text-gray-900">Dev App</h1>
            <ModeToggle/>
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