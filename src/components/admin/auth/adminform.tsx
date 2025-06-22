"use client";
import { auth } from "@/src/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const validate = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
};

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log("Logged In User", userCredential.user);
        router.push("/dashboard");
      } catch (err: any) {
        console.error("Login Error", err);
        setErrorMsg(err.message || "something went wrong");
      } finally {
        setIsLoading(false);
      }
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 flex flex-col gap-3">
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      {/* Email Field */}
      <div>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email"
          className="w-full h-[50px] py-2 px-3 text-sm bg-gray-100 border-b-2 border-gray-300 rounded-full focus:border-red-500 focus:rounded-full focus:outline-none"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          className="w-full h-[50px] py-2 px-3 text-sm bg-gray-100 border-b-2 border-gray-300 rounded-full focus:border-red-500 focus:rounded-full focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-4 right-4 text-gray-600"
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
        )}
      </div>

      {/* forget password */}
      <div>
        <Link
          href="#"
          className="text-red-500 hover:underline text-sm font-semibold float-end"
        >
          Forget Password?
        </Link>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="w-[280px]  bg-red-500 text-white p-2 rounded-xl font-semibold mt-2 hover:bg-red-600"
        >
          {isLoading ? "Signing in ...." : "Login"}
        </button>
      </div>
    </form>
  );
}
