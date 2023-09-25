import Grid from "@mui/material/Grid";
import trophyImg from "../assets/trophy.png";
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
    },
  ];
  const players = myPlayers.map((object) => <Players player={object} />);
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <Grid
        sx={{
          height: "20vh",
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
            <p>LIGA: OURO</p>
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
