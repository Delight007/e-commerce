"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/src/config/firebase";
import Login from "@/src/components/admin/auth/login";

export default function Page() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<null | boolean>(null);

  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const role = userSnap.data().role;
          if (role === "admin") {
            setIsAdmin(true);
          } else {
            router.push("/"); // or any other page
          }
        } else {
          router.push("/");
        }
      } else {
        router.push("/login"); // or any public page
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isAdmin === null) {
    return (
      <div className="w-full h-screen flex flex-col gap-2 items-center justify-center text-gray-700">
        <div className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium">Authorizing...</p>
      </div>
    );
  }

  return <Login />;
}
