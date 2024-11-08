"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Failed to sign in", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignIn}
      >
        Sign in with Google
      </Button>
    </div>
  );
}
