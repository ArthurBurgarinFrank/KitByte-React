import Tiny from "../Components/tinyBox"
import ImgBell from "../assets/Images/bell.png"
import ImgWhats from "../assets/Images/whatsApp.png"
import module from "../dependencies";

export default function Home(props) {

  const buttonThemeReturn = module.createTheme({
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

  const courses = props.courses.map((object, index) => (
    <Tiny object={object} bdRadius={"100%"} bgColor={"#2880F2"} key={index} text={"Conheça!"} contrast={false} fullWidth={false} />
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

        <h2 style={{ textAlign: "center", fontWeight: "normal", color: "white" }}>
          Continue com sua última atividade:
        </h2>

        <module.ThemeProvider theme={buttonThemeReturn}>
          <module.Link to="/exercises">
            <module.Button
              sx={{
                marginTop: 1,
              }}
              color="primary"
              variant="contained"
            >
              Ir para Atividade
            </module.Button>
          </module.Link>
        </module.ThemeProvider>
      </module.Grid>
      {courses}
    </module.Grid>
  );
}