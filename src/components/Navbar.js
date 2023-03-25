import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SideBarLogo from "../resources/SidebarLogo.png";

const headerBtnSX = {
  my: 2,
  color: "white",
  display: "block",
  "&:hover": {
    backgroundColor: "#005800",
  },
};

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#006400" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={SideBarLogo} alt="Logo" className="sidebar-logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Fountains
          </Typography>
            
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
              href="/Admin"
              sx={headerBtnSX}
            >
              Fountain list
            </Button>
            <Button
              href="/addAdmin"
              sx={headerBtnSX}
            >
              Add admin
            </Button>
            <Button
              href="/addFountain"
              sx={headerBtnSX}
            >
              Add fountain
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              noWrap
              onClick={handleOpenUserMenu}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                justifyContent: "end",
              }}
            >
              Username
            </Typography>
            <Typography
              variant="h6"
              noWrap
              onClick={handleOpenUserMenu}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
                justifyContent: "end",
              }}
            >
              Email@email.com
            </Typography>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component="a"
                href="/adminProfileEdit"
                key="Edit profile"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Edit profile</Typography>
              </MenuItem>
              <MenuItem
                component="a"
                href="/"
                key="Logout"
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
