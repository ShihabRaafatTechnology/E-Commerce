import { z } from "zod";


const registerSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z.string().min(1, { message: "The email address is required." }).email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters longs" }).regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
    }),
    confirmPassword: z.string().min(1, { message: "Password confirm is required." })
  }).refine((input) => input.password === input.confirmPassword, { message: "Password doesn't match.", path: ["confirmPassword"] });
  
  
  type TFormHandler = z.infer<typeof registerSchema>

  export {registerSchema, type TFormHandler}