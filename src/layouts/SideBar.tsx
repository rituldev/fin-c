import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Badge, Collapse, List, MenuItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import images from "../assets/images";
import portalTheme from "../themes/App.theme";

const useStyles = makeStyles(() => ({
  Navigation: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 80,
    paddingTop: 74,
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
    [portalTheme.breakpoints.down("md")]: {
      paddingTop: 74,
    },
    [portalTheme.breakpoints.down("sm")]: {
      paddingTop: 56,
      width: 65,
    },
    "&.sidebar": {
      backgroundColor: [portalTheme.palette.primary.light],
      "& .main-navigation": {
        overflow: "auto",
        maxHeight: "100%",
        "& .nav-link": {
          display: "block",
          padding: 0,
          "& .nav-item": {
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            lineHeight: "19px",
            padding: "18px 18px",
            color: "#FFFF",
            flexDirection: "column",
            "&.active": {
              backgroundColor: "#008F8D",
            },
          },
        },
      },
    },
  },
}));

const menuData = [
  { title: "Dashboard", image: images.IcDashboard },
  { title: "Account", image: images.IcAccount },
  { title: "GST", image: images.IcGst },
  { title: "Message", image: images.IcMessage },
  { title: "Settings", image: images.IcSetting },
];

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <aside className={`sidebar ${classes.Navigation}`}>
        <ul className="main-navigation">
          {menuData?.map((menu) => (
            <MenuItem key={menu?.image} className={`nav-link`}>
              <NavLink
                className="nav-item"
                activeClassName={`${menu?.title === "Dashboard" && `active`}`}
                title={menu?.title}
                to="#"
              >
                <Avatar
                  className="nav-icon"
                  variant="square"
                  src={menu?.image}
                  sx={{ width: 25, height: 25 }}
                />
                <span>{menu?.title}</span>
                {/* {menu?.notifications > 0 && openMenu !== menu?.module && (
                  <Badge badgeContent={menu?.notifications} color="warning" />
                )} */}
              </NavLink>
            </MenuItem>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
