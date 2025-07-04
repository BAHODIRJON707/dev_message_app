import {z} from 'zod'

export const emailSchema = z.object({
    email: z.string().email('Invalid email address, please check and try again.')
})

export const otpSchema = z.object({
    otp: z.string().min(6, 'your on time password 6 characters')
}).merge(emailSchema)