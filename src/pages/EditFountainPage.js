import React from "react";
import { Grid, Box } from "@mui/material";
import ResponsiveAppBar from "../components/Navbar";
import EditFountainForm from "../components/EditFountainForm";

function EditFountainPage() {
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
        <EditFountainForm />
      </Grid>
    </Box>
  );
}

export default EditFountainPage;
