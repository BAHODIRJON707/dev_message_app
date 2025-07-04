'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { useAuth } from '@/hooks/use-Auth'
import { otpSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useForm } from 'react-hook-form'
import z from 'zod'

const Verify = () => {
  const {email} = useAuth()

  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues:{
      email,
      otp:"",
    }
  })

  function onSubmit(values:z.infer<typeof otpSchema>){
    console.log(values)
    window.open('/','_self')
  }
  return (
    <>
      <p className='text-center text-muted-foreground text-sm'>
        We have send your email verification code
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-10/12 mx-auto p-6'>
          <FormField
          control={form.control} 
          name='otp' 
          render={({field}) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl className='bg-white'>
                <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup className='w-full'>
                    <InputOTPSlot index={0} className='w-full dark:bg-primary-foreground bg-secondary'/>
                    <InputOTPSlot index={1} className='w-full dark:bg-primary-foreground bg-secondary'/>
                    <InputOTPSlot index={2} className='w-full dark:bg-primary-foreground bg-secondary'/>
                  </InputOTPGroup>
                    <InputOTPSeparator />
                  <InputOTPGroup className='w-full'>
                    <InputOTPSlot index={3} className='w-full dark:bg-primary-foreground bg-secondary'/>
                    <InputOTPSlot index={4} className='w-full dark:bg-primary-foreground bg-secondary'/>
                    <InputOTPSlot index={5} className='w-full dark:bg-primary-foreground bg-secondary'/>
                  </InputOTPGroup>
                </InputOTP>
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

export default Verify