"use client";
import React from "react";
import SidebarLoginSignup from "../auth/sidebarLoginSignup";
import { Fugaz_One } from "next/font/google";
import SignupForm from "./signupForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function SignUp() {
  const pathName = usePathname();
  return (
    <div className="flex flex-1">
      <SidebarLoginSignup />
      <div className="bg-white w-full h-[100vh] p-4">
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
        <div className="w-full  flex flex-col  items-center">
          <div className="mt-[20px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className={`${fugazOne.className} font-semibold text-xl`}>
                Welcome, Get Started
              </h2>
              <p className="text-gray-400 text-[12px]">
                Welcome to gana Express, Get Anything you want !!
              </p>
              <span className="mt-3 w-full border p-2 text-sm text-center rounded-xl font-semibold cursor-pointer">
                Sign up with Google
              </span>
              <div className="mt-3 flex gap-2 justify-center items-center text-gray-400 text-[12px]">
                <span>--------------------</span>
                <span>Or Sign up with Email</span>
                <span>--------------------</span>
              </div>
            </div>
          </div>
          <div className=" mt-3">
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
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
