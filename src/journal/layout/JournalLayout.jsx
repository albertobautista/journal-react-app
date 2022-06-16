import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 300;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* Sidebar */}
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
