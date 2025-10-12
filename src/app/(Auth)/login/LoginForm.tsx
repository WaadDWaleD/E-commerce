"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./login.schema";
import { LoginFormType } from "./login.types";
import { handleLogin } from "./login.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormType>({
    resolver: zodResolver(schema),
  });

  const { control, handleSubmit, reset } = form;

  async function mySubmit(data: LoginFormType) {
    setLoading(true);
    const res = await signIn('credentials',{...data, redirect: false});

    if(res?.ok){
      toast.success("Login successful!");
      reset();
     
      window.location.href = "/";
    }
    else{
            toast.error( "Login failed!, Email or Password is in-correct");

    }
    // const result = await handleLogin(data);
    // setLoading(false);

    // if (result.success) {
    //   toast.success("Login successful!");
    //   reset();
    //   router.push("/");
    // } else {
    //   toast.error(result.message || "Login failed!");
    // }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
  <div className="w-[500px] md:w-[600px] p-14 border-2 border-green-200 rounded-3xl shadow-2xl bg-white hover:scale-105 transition-transform duration-300">
    <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
      Login
    </h1>

    <Form {...form}>
      <form onSubmit={handleSubmit(mySubmit)} className="flex flex-col gap-4">
        {/* Email */}
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 hover:border-green-400 transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 hover:border-green-400 transition-all duration-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-4 bg-green-600 hover:bg-green-700 text-white"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  </div>
</div>

  );
}
