"use client";

import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function SignOut() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}
