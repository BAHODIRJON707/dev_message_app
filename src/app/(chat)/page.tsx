import { Loader2 } from 'lucide-react'
import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import ContactList from './_components/contact-list'
import { IUser } from '@/types'
import { Avatar } from '@/components/ui/avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const Home = () => {
    const contacts =[
    {email:'john@gmail.com', _id:'1', status:'online', avatar:'https://robohash.org/1c83a90f395a6b038df7009489f99b3e?set=set4&bgset=&size=400x400'},
    {email:'liya@gmail.com', _id:'2', status:'offline', avatar:'https://robohash.org/54fe0fd9742b4645f7c96e0958e4d1e4?set=set4&bgset=&size=400x400'},
    {email:'elisa@gmail.com', _id:'3', status:'online', avatar:'https://robohash.org/8f23f515430d841ba649833a11f18e6e?set=set4&bgset=&size=400x400'},
    {email:'amaya@gmail.com', _id:'4', status:'offline', avatar:'https://gravatar.com/avatar/b9e5b66800ce58697bf39de243dfdc27?s=400&d=robohash&r=x'},
    {email:'mark@gmail.com', _id:'5', status:'online', avatar:'https://gravatar.com/avatar/ec6cd6e67aaf1e8f4433bb425ef24398?s=400&d=robohash&r=x'},
    ]

    const renderContact = (contact:IUser) =>{
      return (
      <div className='flex justify-between items-center hover:bg-secondary/50 p-2'>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar className='bg-secondary'>
              <AvatarImage src={contact.avatar} alt={contact.email[0]}/>
              <AvatarFallback>{contact.email[0]}</AvatarFallback>
            </Avatar>
            <div className={`size-3 absolute rounded-full bottom-0 right-0 ${contact.status==='online' ? 'bg-green-500':'bg-green-50'}`}></div>
          </div>
        </div>
      </div>
      )
    }
  return (
    <>
    {/* SideBar */}
    <div className='w-80 h-screen border-r fixed inset-0 z-50'>
      {/* Loading */}
      {/* <div className="w-full flex h-[95vh] justify-center items-center">
        <Loader2 size={50} className='animate-spin'/>
        </div> */}
      {/* Contact list */}
      <ContactList contacts={contacts}/>
      {contacts.length === 0 && (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <p>Contact list empty</p>
        </div>
      )}
    {contacts.map(contact=>renderContact(contact))}
    </div>
    {/* Chat area */}
    </>
  )


}

export default Home
