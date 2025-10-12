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
import { schema } from "./register.schema";
import { RegisterFormType } from "./register.types";
import { handleRegister } from "./register.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(schema),
  });

  const { control, handleSubmit, reset } = form;

  async function mySubmit(data: RegisterFormType) {
    setLoading(true);
    const result = await handleRegister(data);
    setLoading(false);

    if (result.success) {
      toast.success("Registration successful!");
      reset();
      router.push("/login");
    } else {
      toast.error(result.message || "Registration failed!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-white">
      <div className="max-w-lg md:max-w-xl w-full mx-auto p-10 border-2 border-green-200 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">
          Register
        </h1>

        <Form {...form}>
          <form onSubmit={handleSubmit(mySubmit)} className="flex flex-col gap-4">
            {/* Name */}
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-400 hover:border-green-400 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            {/* Phone */}
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
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

            {/* Confirm Password */}
            <FormField
              control={control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
