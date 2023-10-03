import { object } from "prop-types";
import Tiny from "../Components/tinyBox"
import ImgBell from "../assets/Images/bell.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";

import module from "../dependencies";

export default function Exercises() {
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

  const MyCourses = [
    {
      title: "Redes sociais,",
      description: "Conheça cada uma!",
      img: ImgBell
    },
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgBell
    }
  ];
  const courses = MyCourses.map((object, index) => (
    <Tiny key={index} text={"Conheça!"} title={object.title} description={object.description} img={object.img} contrast={false} fullWidth={false} />
  ));
  return (
    <module.Grid sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: 3,
      marginTop: "20%"
    }}>

      <module.Grid
        sx={{
          width: "90vw",
          height: "50vh",
          backgroundColor: "#2880F2",
          borderRadius: 5,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          gap: 2
        }}
      >
        <module.Grid
          sx={{
            backgroundColor: "#F3F3F3",
            width: "50%",
            height: "50%",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src={ImgBell} id="imgTemp" />
        </module.Grid>

        <h2 style={{textAlign: "center"}}>
          Continue com sua última atividade:
        </h2>
        
        <ThemeProvider theme={buttonThemeReturn}>
          <module.Button
            sx={{
              marginTop: 1,
            }}
            color="primary"
            variant="contained"
          >
            Ir para Atividade
          </module.Button>
        </ThemeProvider>
      </module.Grid>

      {courses}
    </module.Grid>
  );
}