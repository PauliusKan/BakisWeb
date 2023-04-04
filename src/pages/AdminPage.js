import React from "react";
import { FountainTable } from "../components/FountainTable";
import { Grid, Box } from "@mui/material";
import ResponsiveAppBar from "../components/Navbar";

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
        style={{ minHeight: "80vh", padding: "20px", paddingInline: "40px" }}
      >
        <FountainTable />
      </Grid>
    </Box>
  );
}

export default AddAdminPage;
