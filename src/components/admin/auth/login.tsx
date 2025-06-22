"use client";
import Image from "next/image";
import React from "react";
// import AdminLoginForm from "./adminform";
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import AdminLoginForm from "./adminform";

export default function Login() {
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
        <div className="bg-white w-[350px] h-[500px]  transition-shadow rounded-2xl pt-3 px-6 shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)]">
          <div className="flex justify-center items-center  ">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={160}
              height={40}
              priority={true}
            />
          </div>
          <div>
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
