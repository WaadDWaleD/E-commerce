"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import RegisterForm from "./RegisterForm";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {

return(
  <>
  <RegisterForm/>
  </>


);

}
