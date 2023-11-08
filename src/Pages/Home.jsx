import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import ImgTask from "../assets/Images/imgTask.png";
import { useNavigate } from "react-router";

export default function Home() {
  const [MyContents, setMyContents] = module.useState();
  const [IsNull, setIsNull] = module.useState(true);
  const [Email, setEmail] = module.useState("");
  const [Open, setOpen] = module.useState(false);

  module.useEffect(() => {
    if (window.Android) {
      const userEmail = window.Android.parametrosFront();
      setEmail(userEmail);
    }
  }, []);

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: `https://api-interdisciplinar.onrender.com/api/app/suggestedcourse?email=${Email}`,
      })
      .then((response) => {
        setMyContents(response.data);
        if (MyContents.ultimo) {
          setIsNull(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  module.useEffect(() => {
    myFunc();
  }, []);

  const navigate = useNavigate();

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!MyContents) {
    return;
  }
  return (
    <module.Grid
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        marginTop: "20%",
        paddingBottom: 10,
      }}
    >
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={Open}
      >
        <DialogTitle id="alert-dialog-title">
          {"Nenhum curso em progresso"}
        </DialogTitle>

        <DialogActions>
          <module.Button onClick={handleClose} autoFocus>
            Ok
          </module.Button>
        </DialogActions>
      </Dialog>

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
          gap: 2,
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
            justifyContent: "center",
          }}
        >
          <img src={ImgTask} id="imgTemp" />
        </module.Grid>

        <h2
          style={{ textAlign: "center", fontWeight: "normal", color: "white" }}
        >
          Continue com sua última atividade:
        </h2>

        <module.ThemeProvider theme={buttonThemeReturn}>
          <module.Button
            onClick={
              !IsNull
                ? handleClickOpen
                : () => {
                    navigate(
                      `/map?img=${MyContents.ultimo.imagem}&description=${MyContents.ultimo.nome_curso}`
                    );
                  }
            }
            color="primary"
            variant="contained"
            img={MyContents.ultimo ? MyContents.ultimo.imagem : null}
            description={
              MyContents.ultimo ? MyContents.ultimo.nome_curso : null
            }
          >
            Ir para Atividade
          </module.Button>
        </module.ThemeProvider>
      </module.Grid>
      <Tiny
        title={MyContents.sugerido1.app}
        description={MyContents.sugerido1.descricao}
        img={MyContents.sugerido1.foto_curso}
        bdRadius={"100%"}
        bgColor={"#2880F2"}
        text={"Conheça!"}
        contrast={false}
        fullWidth={false}
      />
      <Tiny
        title={MyContents.sugerido2.app}
        description={MyContents.sugerido2.descricao}
        img={MyContents.sugerido2.foto_curso}
        bdRadius={"100%"}
        bgColor={"#2880F2"}
        text={"Conheça!"}
        contrast={false}
        fullWidth={false}
      />
    </module.Grid>
  );
}
