import { auth } from "@/src/config/firebase";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

/* ------------------ VALIDATION ------------------ */
const validate = (values: { email: string; password: string }) => {
  const errors: { email?: string; password?: string } = {};

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

/* ------------------ ERROR MAPPER ------------------ */
const getFirebaseError = (code?: string) => {
  switch (code) {
    case "auth/invalid-email":
      return { field: "email", message: "Invalid email address" };

    case "auth/invalid-credential":
      return {
        field: "password",
        message: "Invalid email or password",
      };

    case "auth/user-disabled":
      return {
        field: "email",
        message: "This account has been disabled",
      };

    default:
      return {
        field: "form",
        message: "Login failed. Try again",
      };
  }
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const toastId = toast.loading("Signing in...");
      setIsLoading(true);

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = userCredential.user;

        // 🔐 Email verification check
        if (!user.emailVerified) {
          await sendEmailVerification(user);
          toast.dismiss(toastId);
          toast.error("Verify your email. Verification link sent 📩");
          return;
        }

        toast.dismiss(toastId);
        toast.success("Login successful 🎉");
        router.push("/");
      } catch (err: any) {
        toast.dismiss(toastId);

        const error = getFirebaseError(err.code);

        if (error.field === "email") {
          formik.setFieldError("email", error.message);
        } else if (error.field === "password") {
          formik.setFieldError("password", error.message);
        } else {
          toast.error(error.message);
        }

        console.log("Firebase error:", err.code);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-2 flex flex-col gap-3">
      {/* Email */}
      <div>
        <label className="text-sm font-semibold">Email*</label>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter email"
          className="w-full border p-2 rounded-xl text-sm"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <label className="text-sm font-semibold">Password*</label>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
          className="w-full border p-2 pr-10 rounded-xl text-sm"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-9 right-3 text-gray-600"
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
        )}
      </div>

      {/* Forgot Password */}
      <Link
        href="/forgot-password"
        className="text-red-500 text-sm font-semibold self-end"
      >
        Forgot Password?
      </Link>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-red-500 text-white p-2 rounded-xl font-semibold hover:bg-red-600 disabled:opacity-60"
      >
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
