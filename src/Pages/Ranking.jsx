import "../index.css";
import module from "../dependencies"
import trophyImg from "../assets/Images/trophy.png";
import Player from "../Components/player.jsx";

export default function Ranking() {

  const [MyPlayers, setMyPlayers] = module.useState()
  const [Players, setPlayers] = module.useState()

  async function myFunc() {
    
    await module.axios({
      method: "get",
      url: "https://api-interdisciplinar.onrender.com/api/app/ranking",
    })
      .then((response) => {
        setMyPlayers(response.data)
        setPlayers(MyPlayers.map((object, index) => (
          <Player key={index} index={index + 1} background={"#FFFFFF"} color={"#2880F2"} player={object} fullWidth={false} />
        )))
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } 
  module.useEffect(() => {
    myFunc()
  }, [MyPlayers])

  var txt = sessionStorage.getItem("email")

  return (
    <module.Grid
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "8%",
        backgroundColor: "#F3F3F3"
      }}
    >
      <module.Grid
        sx={{
          height: "30vh",
          width: "100%",
        }}
      >
        <module.Grid
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
            <p><b>LIGA: {txt}</b></p>
          </div>
        </module.Grid>
      </module.Grid>

      <module.Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          alignItems: "center",
          paddingBottom: 10
        }}
      >
        {Players}
      </module.Grid>
    </module.Grid>
  );
}
