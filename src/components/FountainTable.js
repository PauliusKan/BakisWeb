import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Switch,
  Grid,
} from "@mui/material";
import "../css/FountainTable.css";

export const FountainTable = ({ fountains }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh", padding: "50px"}}
    >
      <TableContainer
        component={Paper}
        className="tableContainer"
        sx={{ maxHeight: "80vh" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="tableHeadCell">Name</TableCell>
              <TableCell className="tableHeadCell">FountainId</TableCell>
              <TableCell className="tableHeadCell">Address</TableCell>
              <TableCell className="tableHeadCell">Latitude</TableCell>
              <TableCell className="tableHeadCell">Longitude</TableCell>
              <TableCell className="tableHeadCell" align="center">Controlls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fountains.map((fountain) => (
              <TableRow key={fountain.fountainId}>
                <TableCell>{fountain.name}</TableCell>
                <TableCell>{fountain.fountainId}</TableCell>
                <TableCell>{fountain.address}</TableCell>
                <TableCell>{fountain.latitude}</TableCell>
                <TableCell>{fountain.longitude}</TableCell>
                <TableCell align="center">
                  <Switch color="success"></Switch>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: "10px" }}
                    color="success"
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
