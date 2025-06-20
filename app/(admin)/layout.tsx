"use client";

import React from "react";
import AdminSideBar from "./sidebar/adminSideBar";
import AdminNavbar from "./navbar/navbar";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/src/components/admin/auth/userRole";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { role, loading } = useUserRole();
  const router = useRouter();

  // While role is being determined
  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col gap-2 items-center justify-center text-gray-700">
        <div className="w-6 h-6 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-medium">Authorizing...</p>
      </div>
    );
  }

  // If user is not an admin, redirect
  if (role !== "admin") {
    router.push("/");
    return null;
  }

  // If admin, render layout
  return (
    <div className="flex h-screen w-full">
      <div className="w-[250px] bg-red-500">
        <AdminSideBar />
      </div>
      <div className="flex-1">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
