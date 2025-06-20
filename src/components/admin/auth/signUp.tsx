import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";

export default function SignUp() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/admin.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Skewed white panel */}
      <div className="absolute top-0 -right-20 h-full w-[30%] origin-left -skew-x-12 bg-white z-10" />

      {/* Form */}
      <div className="absolute top-1/2 right-28 -translate-y-1/2 z-20 ">
        <form className="bg-white w-[400px] h-[500px]  transition-shadow rounded-2xl pt-3 px-6 shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)]">
          <div className="flex justify-center items-center w-full h-[50px] ">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={160}
              height={40}
              priority={true}
            />
          </div>
          <div>{/* <AdminLoginForm /> */}</div>
          <div className="mt-3 flex gap-2 justify-center uppercase font-semibold items-center text-gray-400 text-[12px]">
            <span>-----------------</span>
            <span>Or Sign Up with </span>
            <span>-----------------</span>
          </div>

          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="p-2 border rounded-full cursor-pointer hover:bg-slate-200">
              <FcGoogle />
            </div>
            <div className="p-2 border  rounded-full cursor-pointer hover:bg-slate-200">
              <TiSocialFacebook className="text-blue-600" />
            </div>
            <div className="p-2 border rounded-full cursor-pointer hover:bg-slate-200">
              <FaTwitter />
            </div>
            <div className="p-2 border rounded-full cursor-pointer hover:bg-slate-200">
              <FaLinkedinIn className="text-blue-600" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className=" flex gap-2 justify-start items-center">
              <p className="text-gray-400 text-[12px]">
                Already you have an account?
              </p>
              <Link href="#" className="font-semibold text-sm text-red-500 ">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
