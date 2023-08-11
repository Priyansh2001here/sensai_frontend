import React, { Fragment, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

//mui
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ListItemIcon from "@mui/material/ListItemIcon";

// //components
// import Logo from "components/Logo";

//utils
import NavLinks from "../../utils/navLinks";
import { matchPath } from "../../utils/helpers";

//context
import { AuthContext } from "../../context/AuthContext";

const SideBar = () => {

  const { pathname } = useLocation();
  const [listItemIndex, setListItemIndex] = useState(0);
  const { user } = useContext(AuthContext);
  const isHovered = true;

  const handleClick = (index) => {
    if (listItemIndex === index) {
      setListItemIndex(999);
    } else {
      setListItemIndex(index);
    }
  };

  const getIconColor = (link) => {
    if (matchPath(pathname, link)) {
      return true;
    }
    return false;
  };
  // {link !== && user && user.isAdmin &&
  return (
    <Box>
      {/* <Logo isHovered={isHovered}/> */}
      <List>
        {NavLinks.map((link, index) => {

          if (link.key  === 'admin' && user && !user.isAdmin) {
            return (<></>)
          }

          return (

            <Fragment key={link.key}>
              <Link
                // to={link.secondary ? `/app/${link.key}/${link.secondary[0].key}` : `/app/${link.key}`}
                to={`/app/${link.key}`}
                style={{ display: "flex", alignItems: "center" }}
              >
                <ListItemButton
                  onClick={() => handleClick(index)}
                  disableRipple
                  sx={{
                    height: "60px",
                    pl: { md: "12px", lg: "14px", xl: "19px" },
                    "& .MuiListItemIcon-root": {
                      minWidth: { md: "30px", lg: "35px", xl: "40px" },
                      marginRight: "5px",
                    },
                    "&:hover": {
                      background: (theme) => theme.palette.primary.outerborder,
                    },
                  }}
                >
                  {/* <ListItemIcon>
                    {getIconColor(link.key) ? <IconCol /> : <Icon />}
                  </ListItemIcon> */}
                  {isHovered ?
                    <>
                      <ListItemText
                        primary={link.primary}
                        sx={{
                          [`& .MuiTypography-root`]: (theme) => ({
                            fontWeight: matchPath(pathname, link.key) ? 700 : 400,
                            color: matchPath(pathname, link.key)
                              ? theme.palette.primary.main
                              : "#4F4F4F",
                            fontSize: { md: "14px", lg: "16px", xl: "18px" },
                          }),
                        }}
                      />
                      {
                        link.secondary ?
                          listItemIndex === index ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          ) :
                          <></>
                      }
                    </> :
                    <></>
                  }
                </ListItemButton>
              </Link>
              {isHovered &&
                <Collapse
                  in={listItemIndex === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {link.secondary && link.secondary.map((secLink, index) => {
                      return (
                        <Fragment key={secLink.key}>
                          <Link
                            to={`/app/${link.key}/${secLink.key}`}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <ListItemButton
                              sx={{
                                pl: { md: 2, lg: 2, xl: 2 },
                                pr: 0,
                                pt: 0,
                                pb: 0,
                                background: matchPath(pathname, secLink.key) ? `linear-gradient(90deg, #E8F4FF 0%, rgba(249, 252, 255, 0.9) 77.73%, rgba(249, 252, 255, 0) 96.18%);` : "",
                                transform: matchPath(pathname, secLink.key) ? `matrix(-1, 0, 0, 1, 0, 0)` : "",
                                borderLeft: matchPath(pathname, secLink.key) ? (theme) => `3px solid ${theme.palette.primary.main}` : "",
                                "&:hover": {
                                  background: matchPath(pathname, secLink.key) ? `linear-gradient(90deg, #E8F4FF 0%, rgba(249, 252, 255, 0.9) 77.73%, rgba(249, 252, 255, 0) 96.18%);` : (theme) => theme.palette.secondary.main,
                                },
                              }}
                              key={secLink.text}
                              disableRipple
                            >
                              <ListItemText
                                primary={secLink.text}
                                sx={{
                                  transform: matchPath(pathname, secLink.key) ? `matrix(-1, 0, 0, 1, 0, 0)` : "",
                                  pl: matchPath(pathname, secLink.key) ? { md: 7.5, lg: 7.5, xl: 7.5 } : { md: 5.5, lg: 5.5, xl: 5.5 },
                                  [`& .MuiTypography-root`]: (theme) => ({
                                    fontWeight: matchPath(pathname, secLink.key)
                                      ? 500
                                      : 400,
                                    color: matchPath(pathname, secLink.key)
                                      ? "#1B1C1E"
                                      : "#4F4F4F",
                                    fontSize: { md: "12px", lg: "14px", xl: "16px" },
                                  }),
                                  mt: 1,
                                }}
                              />
                            </ListItemButton>
                          </Link>

                        </Fragment>
                      );
                    })}
                  </List>
                </Collapse>
              }
            </Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;