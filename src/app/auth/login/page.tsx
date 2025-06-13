'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginComponent from "@/components/LoginComponent"; // Import the LoginComponent
import AuthGuard from "@/components/authGuard";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {

  }, [router]);

  return <>
    <AuthGuard> 
      <LoginComponent />
    </AuthGuard>
  </>;
}
