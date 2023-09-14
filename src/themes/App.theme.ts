import { createTheme } from "@mui/material/styles";

let portalTheme = createTheme({
  palette: {
    primary: {
      main: "#07689F",
      dark: "#5556A6",
      light: "#425C81",
    },
    // for table
    secondary: {
      contrastText: "#4087FC",
      main: "#008F8D",
      light: "#F4F7FA",
      dark: "#1C3A66",
    },
    text: {
      primary: "#484D4C",
      disabled: "#1A202E",
      secondary: "#212121",
    },
    // info: {
    //   main: "#9BB6D5",
    //   contrastText: "#6AB7FF",
    // },
    // error: {
    //   main: "#FF5353",
    //   light: "#FF8A8A",
    // },
    // warning: {
    //   main: "#FDA53D",
    //   dark: "#F8824F",
    // },
    // success: {
    //   main: "#45D09E",
    // },
  },
});

portalTheme = createTheme(portalTheme, {
  // Typography
  typography: {
    h1: {
      fontSize: "27px",
      fontWeight: 700,
      letterSpacing: 0,
      color: [portalTheme.palette.text.secondary],
      [portalTheme.breakpoints.up("md")]: { fontSize: "32px" },
    },
    h2: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: 0,
      color: [portalTheme.palette.secondary.main],
      // [portalTheme.breakpoints.up("md")]: { fontSize: "60px" },
    },
    h3: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
      letterSpacing: 0,
      color: [portalTheme.palette.text.primary],
      [portalTheme.breakpoints.up("md")]: { fontSize: "16px" },
    },
    h4: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "700 !important",
      letterSpacing: 0,
      color: "#161736",
      [portalTheme.breakpoints.up("md")]: { fontSize: "16px" },
    },
    h5: {
      fontSize: "1.33333333333rem",
      lineHeight: 1.2,
      fontWeight: 400,
      letterSpacing: 0,
    },
    h6: {
      fontSize: "1.06666666667rem",
      lineHeight: 1.2,
      fontWeight: 400,
      letterSpacing: 0,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.4,
      fontWeight: 400,
      letterSpacing: 0,
    },
    body2: {
      fontSize: "0.933333333rem",
      lineHeight: 1.2,
      fontWeight: 400,
      letterSpacing: 0,
    },
    caption: {
      fontSize: "0.8rem",
      lineHeight: 1.06666667,
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            padding: 13,
            height: 24,
            color: [portalTheme.palette.text.primary],
          },
          "&:hover": {
            fieldset: {
              borderColor: [portalTheme.palette.primary.main] + "!important",
            },
          },
        },
        notchedOutline: {
          borderColor: [portalTheme.palette.text.primary],
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        adornedEnd: {
          paddingRight: "16px!important",
        },
      },
    },

    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {
    //       marginLeft: -8,
    //     },
    //   },
    // },

    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       // background: [portalTheme.palette.secondary.contrastText],
    //       boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
    //       borderRadius: 5,
    //       "&.select-wrapper": {
    //         maxHeight: 220,
    //       },
    //     },
    //   },
    // },

    MuiInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottom: "1px solid #4087FC!important",
          },
          "&:hover": {
            "&:before": {
              borderBottomColor:
                [portalTheme.palette.primary.main] + "!important",
            },
          },
        },
      },
    },

    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       width: "100%",
    //     },
    //   },
    // },

    // // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "17px",
          lineHeight: "18px",
          fontWeight: 400,
          padding: "10px 20px",
          boxShadow: "none!important",
          borderRadius: "15px",
          [portalTheme.breakpoints.down("md")]: {
            padding: "9px 18px",
            fontSize: "15px",
          },
          [portalTheme.breakpoints.down("sm")]: {
            padding: "8px 16px",
            fontSize: "12px",
          },
          [portalTheme.breakpoints.down("xs")]: {
            padding: "7px 14px",
            fontSize: "12px",
          },
          "&:hover": {
            backgroundColor: portalTheme.palette.primary.light,
          },
        },
        outlinedPrimary: {
          borderColor: [portalTheme.palette.primary.main],
          "&:hover": {
            backgroundColor: "rgba(36, 66, 100, 0.08)",
          },
        },
        startIcon: {
          marginRight: 6,
          marginLeft: -2,
        },
      },
    },

    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       minHeight: "auto",
    //     },
    //   },
    // },

    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          border: "1px solid" + [portalTheme.palette.text.disabled],
          borderRadius: 5,
          marginBottom: 4,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          // borderBottom: "1px solid",
          // borderRight: "1px solid",
          borderColor: [portalTheme.palette.text.disabled],
          "& .MuiCheckbox-root": {
            marginLeft: -8,
            marginTop: -8,
            marginBottom: -8,
          },
        },
        head: {
          padding: "12px 13px",
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 700,
          backgroundColor: [portalTheme.palette.primary.light],
          color: [portalTheme.palette.secondary.light],
          whiteSpace: "nowrap",
        },
        body: {
          padding: "12px 13px",
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 400,
          color: [portalTheme.palette.text.primary],
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 151, 169, 0.2)",
          },
          "&:last-child": {
            "& .MuiTableCell-body": {
              borderBottom: 0,
            },
          },
        },
      },
    },

    //

    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: [portalTheme.palette.primary.light],
          borderRadius: 5,
          margin: 15,
          [portalTheme.breakpoints.up("md")]: {
            margin: 40,
          },
        },
        paperWidthSm: {
          maxWidth: 420,
          width: 420,
        },
        paperWidthMd: {
          maxWidth: 600,
          width: 600,
        },
        paperWidthLg: {
          maxWidth: 1056,
          width: 1056,
        },
        paperWidthXl: {
          maxWidth: 1400,
          width: 1400,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 15,
          lineHeight: "18px",
          color: [portalTheme.palette.text.primary],
          padding: "6px",
          height: 28,
          minWidth: 28,
          margin: "0 4px",
          "&.Mui-selected": {
            color: [portalTheme.palette.secondary.light],
            backgroundColor: [portalTheme.palette.secondary.dark],
            "&:hover": {
              backgroundColor: [portalTheme.palette.primary.light],
            },
          },
          "& .MuiPaginationItem-icon": {
            width: 22,
            height: 22,
          },
        },
      },
    },
    // // Dialog
    // MuiDialogContent: {
    //   styleOverrides: {
    //     root: {
    //       padding: "20px 0!important",
    //       background: "#f0f0f0",
    //       minHeight: 40,
    //       "&.no-action": {
    //         padding: "25px!important",
    //         [portalTheme.breakpoints.up("sm")]: {
    //           padding: "35px!important",
    //         },
    //       },
    //       "&.form-dialog-content": {
    //         padding: "20px 20px 16px!important",
    //         [portalTheme.breakpoints.up("sm")]: {
    //           padding: "20px!important",
    //         },
    //       },
    //     },
    //   },
    // },

    // MuiDialogActions: {
    //   styleOverrides: {
    //     root: {
    //       padding: "16px 20px!important",
    //       flexWrap: "wrap",
    //       "&>:first-of-type": {
    //         margin: "4px 0",
    //       },
    //       "&>:not(:first-of-type)": {
    //         margin: "4px 0",
    //         marginLeft: 8,
    //         [portalTheme.breakpoints.up("sm")]: {
    //           marginLeft: 20,
    //         },
    //       },
    //       "&.manage-patient": {
    //         padding: "20px 0!important",
    //       },
    //       [portalTheme.breakpoints.up("sm")]: {
    //         padding: "20px!important",
    //         flexWrap: "normal",
    //       },
    //       "&.form-dialog-action": {
    //         padding: "16px 0 0!important",
    //         flexWrap: "wrap",
    //         [portalTheme.breakpoints.up("sm")]: {
    //           padding: "20px 0 0!important",
    //           flexWrap: "normal",
    //         },
    //       },
    //     },
    //   },
    // },

    // MuiDialogTitle: {
    //   styleOverrides: {
    //     root: {
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       padding: "12px 16px",
    //       backgroundColor: [portalTheme.palette.secondary.dark],
    //       color: [portalTheme.palette.primary.light],
    //       "& .MuiTypography-root": {
    //         fontSize: "1.2rem",
    //         lineHeight: 1.3333333,
    //       },
    //       "& .close-action": {
    //         minWidth: 24,
    //         margin: "-4px -4px -4px 0",
    //       },
    //     },
    //   },
    // },
    // //select
    // MuiSelect: {
    //   styleOverrides: {
    //     select: {
    //       paddingTop: 13,
    //       paddingBottom: 13,
    //       paddingLeft: 13,
    //       height: 24,
    //       textAlign: "left",
    //     },
    //     icon: {
    //       width: 5,
    //       height: 5,
    //       borderBottom: "solid 1px #B4ADAD",
    //       borderRight: "solid 1px #B4ADAD",
    //       transform: "rotate(45deg)",
    //       right: 13,
    //       top: "calc(50% - 4px)",
    //       path: {
    //         opacity: 0,
    //       },
    //     },
    //   },
    // },
    // //Tabs
    // MuiTabs: {
    //   styleOverrides: {
    //     root: {
    //       minHeight: "auto",
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       padding: "10px 0",
    //       textTransform: "none",
    //       letterSpacing: 0,
    //       fontSize: 18,
    //       fontWeight: "500",
    //       lineHeight: "18px",
    //       minHeight: "auto",
    //       color: "#8A8888",
    //       [portalTheme.breakpoints.up("md")]: {
    //         fontSize: 18,
    //         minHeight: 52,
    //         width: "100%",
    //         marginTop: "25px",
    //       },
    //     },
    //   },
    // },
  },
});

export default portalTheme;
