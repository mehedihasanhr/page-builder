"use client";

import * as React from "react";

import { register } from "@/actions/auth/signup";
import FormErrorMessage from "@/components/form-error";
import FormSuccessMessage from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DEFAULT_REDIRECTION } from "@/config/route.config";
import { signupSchema } from "@/schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type SignUpFormValuesType = z.infer<typeof signupSchema>;

export default function SignUpForm() {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const [isPending, startTransition] = React.useTransition();

  const router = useRouter();

  // form instance
  const form = useForm<SignUpFormValuesType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  // on submit
  function onSubmit(values: SignUpFormValuesType) {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((res) => {
        setError(res.error);
        if (res.success) {
          router.push(DEFAULT_REDIRECTION);
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* Full name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Full name"
                  {...field}
                  className="h-10 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="h-10 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="h-10 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Re-type password"
                  {...field}
                  className="h-10 shadow-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-xs text-zinc-500">
          By clicking "Sign Up", you agree to our Terms of Service and Privacy
          Policy.
        </p>

        <FormSuccessMessage message={success} />
        <FormErrorMessage message={error} />

        <Button type="submit" className="h-10" disabled={isPending}>
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
