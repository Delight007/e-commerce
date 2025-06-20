"use client";
import { auth, db } from "@/src/config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const validate = (values: {
  name: string;
  email: string;
  password: string;
}) => {
  const errors: { name?: string; email?: string; password?: string } = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setIsLoading(true);
      setErrorMsg("");
      try {
        // create user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        // update display profile
        await updateProfile(user, { displayName: values.name });

        //
        await setDoc(doc(db, "Users", user.uid), {
          uid: user.uid,
          name: values.name,
          email: values.email,
          creatAt: new Date(),
        });
        alert("Signup successful!");
        formik.resetForm();
        router.push("/login");
      } catch (err: any) {
        console.error("Signup error:", err);
        setErrorMsg(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }

      //   alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 flex flex-col gap-3">
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="text-[14px] font-semibold">
          Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your name"
          className="w-full border p-2 rounded-xl text-sm focus:outline-red-500"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="text-[14px] font-semibold">
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email"
          className="w-full border p-2 rounded-xl text-sm focus:outline-red-500"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative">
        <label htmlFor="password" className="text-[14px] font-semibold">
          Password*
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          className="w-full border p-2 pr-10 rounded-xl text-sm focus:outline-red-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-9 right-2 text-gray-600"
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-red-500 text-white p-2 rounded-xl font-semibold mt-2"
      >
        {isLoading ? "Signing...." : "Sign Up"}
      </button>
    </form>
  );
}
