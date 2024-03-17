import LoginForm from "@/components/form/login-form";
import { Separator } from "@/components/ui/separator";
import { IconLockFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div>
        <div className="border border-base-50/50 rounded-lg max-w-[450px]">
          <div className="flex items-center flex-col py-6 px-10">
            <IconLockFilled
              size={56}
              stroke={2}
              className="mb-3 text-zinc-500"
            />
            <div className="text-2xl font-bold flex items-center space-x-2 mb-1 text-zinc-700">
              <span>Login to Your Account</span>
            </div>
            <p className="text-sm text-zinc-500 text-center">
              Please enter your credentials to access your account
            </p>
          </div>
          <div className="pb-10 px-10">
            <LoginForm />

            <p className="text-sm text-zinc-500 mt-4">
              Forgot your password?
              <Link
                href="#"
                prefetch={false}
                className="text-blue-500 font-medium hover:underline pl-0.5"
              >
                Reset it here
              </Link>
            </p>

            <p className="text-sm text-zinc-500 mt-4">
              Not a member yet?
              <Link
                href="/signup"
                prefetch={false}
                className="text-blue-500 font-medium hover:underline pl-0.5"
              >
                Sign up here
              </Link>
            </p>

            <Separator className="my-6" />

            <p className="text-xs text-zinc-500 text-center mt-4">
              If you encounter any issues logging in, please contact our support
              team at support@example.com or call us at +1-800-123-4567.
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-400 text-center py-3">
          © 2024 Our Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
