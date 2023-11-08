import module from "../dependencies";

const Tiny = (props) => {
  const location = module.useLocation();
  var myPath = "/courses"
  if (location.pathname === "/map") {
    myPath = "/quiz"
  }
  else if (location.pathname === "/exercises") {
    myPath = "/map"
  }
  else if (location.pathname === "/courses" || location.pathname === "/") {
    myPath = "/lesson"
  }
  else if (location.pathname === "/lesson") {
    myPath = "/video"
  }
  
  var desc
  if (props.description) {
    if (props.description.length > 30) {
      desc = props.description.substr(0, 30) + "...";
    }
  }

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
  if (!props.title) {
    return (
      null
    )
  }
  return (
    <module.Grid
      sx={{
        width: props.fullWidth ? "100vw" : "90vw",
        height: "20vh",
        backgroundColor: props.bgColor,
        display: "flex",
        borderRadius: props.fullWidth ? 3 : 5,
        zIndex: 2
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
            width: "60%",
            height: "70%",
            borderRadius: props.bdRadius,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img id="imgTemp" src={props.img} />
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
          <b>{props.title ? props.title : "Sem titulo"}</b>
        </p>
        {props.contrast ? (
          <b>{desc ? desc : props.description ? props.description : "Carregando..."}</b>
        ) : (
          <p>{desc ? desc : props.description ? props.description : "Carregando..."}</p>
        )}
        {props.text == false ? <b>{"Exercício - " + props.exerciseNumber}</b> : <module.ThemeProvider theme={buttonThemeReturn}>
          <module.Link to={myPath} state={{ img: props.img, description: props.description, id: props.id }}>
            <module.Button
              sx={{
                marginTop: 1,
              }}
              color="primary"
              variant="contained"
            >
              {props.text}
            </module.Button>
          </module.Link>
        </module.ThemeProvider>}
      </module.Grid>
    </module.Grid>
  );
};
export default Tiny;