import { z } from "zod";


const loginSchema = z.object({
    email: z.string().min(1, { message: "The email address is required." }).email(),
    password: z.string().min(1, { message: "The password is required." })
});
  
  
  type TFormHandler = z.infer<typeof loginSchema>

  export {loginSchema, type TFormHandler}