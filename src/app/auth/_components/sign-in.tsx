import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { emailSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const SignIn = () => {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues:{
      email:"",
    }
  })

  function onSubmit(values:z.infer<typeof emailSchema>){
    console.log(values)
  }
  return (
    <>
      <p className='text-center text-muted-foreground text-sm'>
        Dev app is messageing app with a focus on speed and security.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-10/12 mx-auto p-6'>
          <FormField  
          control={form.control} 
          name='email' 
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className='border border-indigo-600' placeholder='please enter your email' {...field}/>
              </FormControl>
              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
          />
          <Button type='submit' className='w-full'>Login</Button>
        </form>
      </Form>
    </>
  )
}

export default SignIn