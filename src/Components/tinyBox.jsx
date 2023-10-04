import module from "../dependencies";

const Tiny = (props) => {

  const location = module.useLocation();
  var myPath = "/list"
  var myProps = props.myCourse
  if (location.pathname == "/map" || location.pathname == "/list") {
    myPath = "/quiz"
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

  return (
    <module.Grid
      sx={{
        width: props.fullWidth ? "100vw" : "90vw",
        height: "20vh",
        backgroundColor: "#2880F2",
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
        {props.text == false ? <b>{"Exercício - " + props.exerciseNumber}</b> : <module.ThemeProvider theme={buttonThemeReturn}>
          <module.Link to={myPath} state={{ object: myProps }}>
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