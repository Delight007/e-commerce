"use client";
import { loginWithGoogle } from "@/src/utils/auth/loginWithGoogle";
import { Fugaz_One } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import SidebarLoginSignup from "../auth/sidebarLoginSignup";
import LoginForm from "./loginForm";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const router = useRouter();
  const pathName = usePathname();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google! 🎉");
      router.push("/"); // navigate to landing page
    } catch (error: any) {
      toast.error(error.message || "Google login failed");
    }
  };
  return (
    <div className="flex">
      <div className="sm:flex hidden flex-1">
        <SidebarLoginSignup />
      </div>

      <div className="bg-white w-full h-[100vh]  p-4 flex-1">
        <h1 className="mt-3">
          <span className={`${fugazOne.className} text-sm font-bold`}>
            Gana
          </span>
          <span
            className={`${fugazOne.className} text-red-500 font-semibold text-sm uppercase`}
          >
            Express
          </span>
        </h1>
        <div className=" w-full flex flex-col  items-center">
          <div className="mt-[20px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className={`${fugazOne.className} font-semibold text-xl`}>
                Welcome Back
              </h2>
              <p className="text-gray-400 text-[12px]">
                Welcome Back, Please Sign in with Google
              </p>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="mt-3 w-full border border-gray-300 p-2 text-sm text-center rounded-xl font-semibold cursor-pointer flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
            >
              <FcGoogle className="w-5 h-5" />
              Sign in with Google
            </button>
            <div className="mt-3 flex gap-2 justify-center items-center text-gray-400 text-[12px]">
              <span>--------------------</span>
              <span>Or Sign in with Email</span>
              <span>--------------------</span>
            </div>
            <div className="mt-3">
              <div className="w-auto h-auto px-2 py-[6px] bg-slate-100 rounded-xl gap-1 flex text-[12px] font-medium">
                <Link
                  className={`p-2 rounded-md w-[150px] text-center ${
                    pathName === "/login" ? "bg-white" : "hover:bg-slate-200"
                  }`}
                  href="/login"
                >
                  Sign In
                </Link>

                <Link
                  className={`p-2 rounded-md w-[150px] text-center ${
                    pathName === "/signup" ? "bg-white" : "hover:bg-slate-200"
                  }`}
                  href="/signup"
                >
                  Signup
                </Link>
              </div>
              <div>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
