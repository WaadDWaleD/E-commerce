import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

export const schema = zod.object({
  
  email: zod.string().email("Email is not in format"),
  
  password: zod
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#\$%&\?]).{8,}$/,
      "Password must be at least 8 characters and include letters, numbers, and special characters (!#$%&?)"
    ),
//   rePassword: zod
//     .string()
//     .nonempty("Confirm Password is required")
//     .regex(
//       /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#\$%&\?]).{8,}$/,
//       "Password must be at least 8 characters and include letters, numbers, and special characters (!#$%&?)"
//     ),
// }).refine((data) => data.password === data.rePassword, {
//   path: ["rePassword"],
//   message: "Passwords do not match",
});
