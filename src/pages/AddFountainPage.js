import React from "react";
import { Grid, Box } from "@mui/material";
import ResponsiveAppBar from "../components/Navbar";
import AddFountainForm from "../components/AddFountainForm";

function AddFountainPage() {
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
        <AddFountainForm />
      </Grid>
    </Box>
  );
}

export default AddFountainPage;
