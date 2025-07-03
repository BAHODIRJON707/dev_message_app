import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full place-items-center gap-2'>
        <Button className='w-10/12'>
            <span>Sign up whith google</span>
            <FaGoogle />
        </Button>
        <Button className='w-10/12'  variant={'secondary'}>
            <span>Sign up with github</span>
            <FaGithub />
        </Button>
    </div>
  )
}

export default Social