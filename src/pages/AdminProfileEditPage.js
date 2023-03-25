import React from "react";
import { Grid, Box } from "@mui/material";
import ResponsiveAppBar from "../components/Navbar";
import AdminProfileEditForm from "../components/AdminProfileEditForm";

function AdminProfileEditPage() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh", padding: "20px" }}
      >
        <AdminProfileEditForm />
      </Grid>
    </Box>
  );
}

export default AdminProfileEditPage;
