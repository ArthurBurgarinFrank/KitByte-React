import { createTheme, ThemeProvider } from "@mui/material/styles";

import module from "../dependencies";

const Tiny = (props) => {
  const buttonThemeReturn = createTheme({
    palette: {
      primary: {
        main: "#D9D9D9",
        contrastText: "#2880F2",
      },
    },
    shape: {
      borderRadius: 40,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow:
              "0px 8px 8px -1px rgba(0,0,0,0.1), 0px 7px 8px -1px rgba(0,0,0,0.3), 0px 2px 5px 0px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    typography: {
      fontFamily: "MinhaFonte, Arial, sans-serif",
    },
  });

  return (
    <module.Grid
      sx={{
        width: "90vw",
        height: "20vh",
        backgroundColor: "#2880F2",
        display: "flex",
        borderRadius: 5,
      }}
    >
      <module.Grid
        sx={{
          width: "45%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <module.Grid
          sx={{
            backgroundColor: "#F3F3F3",
            width: 115,
            height: 115,
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={props.img} id="imgTemp" />
        </module.Grid>
      </module.Grid>

      <module.Grid
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 0.6,
          justifyContent: "center",
          color: "#FFFFFF",
        }}
      >
        <p>
          <b>{props.title}</b>
        </p>
        {props.contrast ? (
          <b>{props.description}</b>
        ) : (
          <p>{props.description}</p>
        )}
        <ThemeProvider theme={buttonThemeReturn}>
          <module.Button
            sx={{
              marginTop: 1,
            }}
            color="primary"
            variant="contained"
          >
            Começar!
          </module.Button>
        </ThemeProvider>
      </module.Grid>
    </module.Grid>
  );
};
export default Tiny;
