'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginComponent from "@/components/LoginComponent"; // Import the LoginComponent

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin-auth")) {
      router.push("/auth"); // Redirect to dashboard if already logged in
    }
  }, [router]);

  return <LoginComponent />;
}
