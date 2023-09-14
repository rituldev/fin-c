import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import { Routing } from "../shared/constants/routing";
import portalTheme from "../themes/App.theme";

const useStyles = makeStyles(() => ({
  Header: {
    zIndex: 5,
    backgroundColor: "#FFFFFF",
    // boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.05)",
    "& .MuiToolbar-root": {
      padding: "8px 40px 8px 30px",
      [portalTheme.breakpoints.down("lg")]: {
        padding: "5px 20px 5px 24px",
      },
      [portalTheme.breakpoints.down("md")]: {
        padding: "5px 20px 5px 22px",
      },
      [portalTheme.breakpoints.down("sm")]: {
        padding: "0px 16px 0px 20px",
      },
    },
    "& .logo": {
      "& img": {
        height: 22,
        width: "auto",
      },
      [portalTheme.breakpoints.up("sm")]: {
        "& img": {
          height: "auto",
          width: "auto",
        },
      },
    },
    "& .MuiAvatar-root": {
      width: 20,
      height: 20,
      [portalTheme.breakpoints.up("sm")]: {
        width: "auto",
        height: "auto",
      },
    },
  },

  ProfileBtn: {
    marginLeft: "15px",
    "& .MuiAvatar-root": {
      width: 34,
      height: 34,
      fontSize: "0.8rem",
      backgroundColor: [portalTheme.palette.primary.main],
      color: [portalTheme.palette.secondary.contrastText],
      [portalTheme.breakpoints.up("md")]: {
        width: 48,
        height: 48,
        fontSize: "1.2rem",
        lineHeight: 1,
      },
    },
    [portalTheme.breakpoints.up("sm")]: {
      marginLeft: "auto",
    },
  },
  NotificationIcon: {
    width: "23px!important",
    height: "23px!important",
    [portalTheme.breakpoints.up("sm")]: {
      width: 25,
      height: 25,
    },
  },
  UserDropDown: {
    minWidth: 204,
    marginTop: 6,
    "& .header": {
      padding: "12px 16px",
      borderBottom: "1px solid #E9E9E9",
      [portalTheme.breakpoints.up("sm")]: {
        padding: "12px 22px",
      },
    },
    "& .usermenu": {
      padding: "10px 12px",
      color: [portalTheme.palette.text.primary],
      [portalTheme.breakpoints.up("sm")]: {
        padding: "13px 16px",
      },
      "& .usermenu-icon": {
        marginRight: 10,
        "& .MuiAvatar-root": {
          width: 18,
          height: 18,
          [portalTheme.breakpoints.up("sm")]: {
            width: 22,
            height: 22,
          },
        },
      },
    },
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const openUser = Boolean(userAnchorEl);
  const handleUserOpen = (event) => setUserAnchorEl(event.currentTarget);
  const handleUserClose = () => setUserAnchorEl(null);

  return (
    <AppBar className={classes.Header} position="fixed" color="default">
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            <div className="d-flex align-items-center">
              <Link to={Routing.DashBoard} className="logo">
                <img src={images.MainLogo} alt="Logo" />
              </Link>
            </div>
          </Grid>
          <div className="pt-15px">
            <IconButton size="medium" edge="start" color="inherit">
              <Badge
                className="warning-dark"
                badgeContent={10}
                max={99}
                color="error"
              >
                <Avatar
                  className={classes.NotificationIcon}
                  variant="square"
                  sx={{ width: 25, height: 25 }}
                  src={images.IcNotificationGrey}
                />
              </Badge>
            </IconButton>
          </div>
          <Grid item xs="auto">
            <IconButton
              className={`ml-md-3 ml-2 p-0 ${classes.ProfileBtn}`}
              size="medium"
              edge="start"
              color="inherit"
              onClick={handleUserOpen}
            >
              <Avatar
                variant="circular"
                sx={{ width: 48, height: 48 }}
                src={images.MainLogo}
              />
            </IconButton>
            <Popover
              anchorEl={userAnchorEl}
              open={openUser}
              onClose={handleUserClose}
              PaperProps={{
                className: classes.UserDropDown,
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="header">
                <Typography variant="body1" className="light-text fw-300 mb-2p">
                  Welcome,
                </Typography>
                <Typography variant="body1">XXX</Typography>
              </div>
              <ul>
                <MenuItem
                  className="usermenu"
                  onClick={() => {
                    handleUserClose();
                  }}
                >
                  <i className="usermenu-icon">
                    <Avatar
                      variant="square"
                      sx={{ width: 22, height: 22 }}
                      src={images.IcUserOutlinedDefault}
                    />
                  </i>
                  <Typography variant="body1">My Profile</Typography>
                </MenuItem>
                <MenuItem className="usermenu">
                  <i className="usermenu-icon">
                    <Avatar
                      variant="square"
                      sx={{ width: 22, height: 22 }}
                      src={images.IcLockDefault}
                    />
                  </i>
                  <Typography variant="body1">Change Password</Typography>
                </MenuItem>
                <MenuItem className="usermenu">
                  <i className="usermenu-icon">
                    <Avatar
                      variant="square"
                      sx={{ width: 22, height: 22 }}
                      src={images.IcLogOutDefault}
                    />
                  </i>
                  <Typography variant="body1">Logout</Typography>
                </MenuItem>
              </ul>
            </Popover>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
