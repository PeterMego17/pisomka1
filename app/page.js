"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            My Next.js App
          </Typography>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {session ? (
              <MenuItem onClick={() => { handleMenuClose(); signOut(); }}>Sign Out</MenuItem>
            ) : (
              <MenuItem onClick={() => { handleMenuClose(); signIn("google"); }}>Sign In</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      <div style={{ textAlign: "center", marginTop: "20%" }}>
        {session ? (
          <>
            <Typography variant="h4" gutterBottom>Welcome, {session.user?.name}!</Typography>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>Please Sign In to Continue</Typography>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
          </>
        )}
      </div>
    </>
  );
}
