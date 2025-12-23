"use client";
import { auth, db } from "@/src/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ------------------ VALIDATION ------------------
  const validate = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const errors: { name?: string; email?: string; password?: string } = {};

    if (!values.name) errors.name = "Name is required";
    else if (values.name.length < 2)
      errors.name = "Name must be at least 2 characters";

    if (!values.email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errors.email = "Invalid email address";

    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    return errors;
  };

  // ------------------ FIREBASE ERROR MAPPING ------------------
  const getFirebaseError = (code?: string) => {
    switch (code) {
      case "auth/email-already-in-use":
        return { field: "email", message: "Email already in use" };
      case "auth/invalid-email":
        return { field: "email", message: "Invalid email address" };
      case "auth/weak-password":
        return { field: "password", message: "Password is too weak" };
      default:
        return { field: "form", message: "Something went wrong. Try again." };
    }
  };

  // ------------------ FORM HANDLER ------------------
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validate,
    onSubmit: async (values) => {
      const toastId = toast.loading("Signing up...");
      setIsLoading(true);

      try {
        // Create user
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        // Update display name
        await updateProfile(user, { displayName: values.name });

        // Save to Firestore
        await setDoc(doc(db, "Users", user.uid), {
          uid: user.uid,
          name: values.name,
          email: values.email,
          createdAt: new Date(),
        });

        // Send verification email
        await sendEmailVerification(user);

        toast.dismiss(toastId);
        toast.success(
          "Signup successful! Verification email sent. Check your inbox 📩"
        );

        formik.resetForm();
        router.push("/login");
      } catch (err: any) {
        toast.dismiss(toastId);
        const error = getFirebaseError(err.code);

        if (error.field === "email")
          formik.setFieldError("email", error.message);
        else if (error.field === "password")
          formik.setFieldError("password", error.message);
        else toast.error(error.message);

        console.error("Signup error:", err.code, err.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  // ------------------ RENDER FORM ------------------
  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 flex flex-col gap-3">
      {/* Name */}
      <div>
        <label className="text-[14px] font-semibold">Name*</label>
        <input
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

      {/* Email */}
      <div>
        <label className="text-[14px] font-semibold">Email*</label>
        <input
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

      {/* Password */}
      <div className="relative">
        <label className="text-[14px] font-semibold">Password*</label>
        <input
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

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-red-500 text-white p-2 rounded-xl font-semibold mt-2 hover:bg-red-600 disabled:opacity-60"
      >
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
