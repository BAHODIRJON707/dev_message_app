import { IUser } from '@/types'
import React, { FC } from 'react'
import Settings from './settings'
import { Input } from '@/components/ui/input'

interface Props{
  contacts: IUser[]
}

const ContactList: FC<Props> = ({contacts}) => {
  return (
    <>
    {/* Top bar */}
    <div className="flex items-center bg-background pl-2 sticky top-0">
      <Settings />
      <div className="m-2 w-full">
        <Input className="bg-secondary" type='text' placeholder='search'/>
      </div>
    </div>
    </>
  )


}

export default ContactList