import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import * as Layout from "./NavBar.styles";
import { pagesBr } from "./data";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { ghostCard } from "../ghostCard/data";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    minWidth: 180,
    backgroundColor: "#540101",
    color: theme.palette.grey[300],
  },
}));

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // DROPDOWN
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Layout.navbar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 5,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Phas-Project
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link href="/ghosts" key={uuidv4()}>
                  <MenuItem key="ghosts" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Fantasmas</Typography>
                  </MenuItem>
                </Link>
                {/* MENU DE TELA PEQUENA */}
                {pagesBr.map((page) => (
                  <Link href={page.link} key={uuidv4()}>
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Phas-Project
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "2rem",
              }}
            >
              {/* MENU TELA GRANDE */}
              {/* <Link href='/ghosts'>
								<Button
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
										borderLeft: '1px solid #610000',
										borderBottom: '1px solid #610000',
									}}
								>
									Ghosts
								</Button> 
							</Link> */}
              <Layout.menuButtons
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                // endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  my: 2,
                }}
              >
                Fantasmas
              </Layout.menuButtons>
              <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link href="/ghosts">
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Todos os fantasmas
                  </MenuItem>
                </Link>
                {ghostCard.map((ghost, i) => {
                  return (
                    <Link href={`/ghosts/${ghost.name}`} key={i}>
                      <MenuItem onClick={handleClose}>{ghost.name}</MenuItem>
                    </Link>
                  );
                })}
              </StyledMenu>
              {pagesBr.map((page) => (
                <Link href={page.link} key={uuidv4()}>
                  <Layout.menuButtons
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                    }}
                  >
                    {page.name}
                  </Layout.menuButtons>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Layout.navbar>
      <Layout.Offset />
    </>
  );
}
