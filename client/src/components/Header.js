import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useAuthContext } from "../context/Auth/AuthContext";
import "./header.css";

const settings = ["Logout"];

export const Header = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(null);
  const navigate = useNavigate();
  const { currentUser, signout } = useAuthContext();

  const handleOpenProfileMenu = ({ currentTarget }) => {
    setOpenProfileMenu(currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setOpenProfileMenu(null);
  };

  const handleLogoutUser = () => {
    signout();
    setOpenProfileMenu(null);
  };

  const handleClickUploadGif = () => {
    navigate("/gifForm");
  };

  const handleClickLogin = () => {
    navigate("/signin");
  };

  const handleClickRegister = () => {
    navigate("/signup");
  };

  const handleClickGifs = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ASSEMBLER CHALLENGE TECH
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickGifs}
            sx={{ marginRight: 10 }}
            className="header-btn"
          >
            GIFS
          </Button>
          {currentUser !== null ? (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                onClick={handleClickUploadGif}
                sx={{ marginRight: 10 }}
                className="header-btn"
              >
                UPLOAD GIF
              </Button>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={openProfileMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(openProfileMenu)}
                onClose={handleCloseProfileMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleLogoutUser}>
                    <Typography textAlign="center" onClick={handleLogoutUser}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Button color="inherit" onClick={handleClickLogin}>
                Login
              </Button>
              <Button color="inherit" onClick={handleClickRegister}>
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
