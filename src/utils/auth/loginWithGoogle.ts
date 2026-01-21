// src/utils/auth.ts
import { auth } from "@/src/config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user; // returns the logged in Firebase user
  } catch (error: any) {
    console.error("Google login error:", error.message);
    throw new Error(error.message);
  }
};
