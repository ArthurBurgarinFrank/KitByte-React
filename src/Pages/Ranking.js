import Grid from "@mui/material/Grid";
import trophyImg from "../assets/Images/trophy.png";
import "../index.css";

import Players from "../Components/Players";

export default function Ranking() {
  const myPlayers = [
    {
      name: "Angela91138",
      pts: 1243,
    },
    {
      name: "Angela91138",
      pts: 1243,
    },
    {
      name: "Angela91138",
      pts: 1243,
    }
  ];
  const players = myPlayers.map((object, index) => (
    <Players key={index} index={index + 1} background={"#FFFFFF"} color={"#2880F2"} player={object} />
  ));
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "8%",
        backgroundColor: "#F3F3F3"
      }}
    >
      <Grid
        sx={{
          height: "30vh",
          width: "100%",
        }}
      >
        <Grid
          item
          sx={{
            height: "100%",
          }}
        >
          <div id="headerRank">
            <p>
              <b>Ranking Kitbyte</b>
            </p>
            <img src={trophyImg} alt="imagem de troféu" />
            <p><b>LIGA: OURO</b></p>
          </div>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          alignItems: "center",
        }}
      >
        {players}
      </Grid>
    </Grid>
  );
}
