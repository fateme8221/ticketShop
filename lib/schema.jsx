import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().min(1, "باید یک نام وارد کنید!"),
  lastName: z.string().min(1, "باید یک نام خانوادگی وارد کنید!"),
  code: z.string().min(1, "باید یک کد ملی وارد کنید!"),
});
