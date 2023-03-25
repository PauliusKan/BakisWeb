import React from "react";
import { Grid, Box } from "@mui/material";
import ResponsiveAppBar from "../components/Navbar";
import AddAdminForm from "../components/AddAdminForm";

function AddAdminPage() {
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
        <AddAdminForm/>
      </Grid>
    </Box>
  );
}

export default AddAdminPage;
