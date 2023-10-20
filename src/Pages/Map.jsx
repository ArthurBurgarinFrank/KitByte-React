import Tiny from "../Components/tinyBox";
import MapComp from "../Components/MapComponent";
import module from "../dependencies";

export default function Map() {

  
  const [MyContents, setMyContents] = module.useState()

  async function myFunc() {
    await module.axios({  
      method: "get",
      url: "https://api-interdisciplinar.onrender.com/api/app/home?id=1",
    })
      .then((response) => {
        setMyContents(response.data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } 
  module.useEffect(() => {
    myFunc()
  }, [])

  if (!MyContents) {
    return null
  }
  return (
    <module.Grid>
      <module.Grid
        sx={{
          backgroundColor: "#2880F2",
          width: "100vw",
          height: "18vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Tiny
          title={"Exercícios"}
          description={MyContents.app}
          contrast={true}
          fullWidth={true}
          text={"Continue"}
          bdRadius={"100%"}
        />
      </module.Grid>
      <module.Grid>
        <MapComp selected={2} />
      </module.Grid>
    </module.Grid>
  );
}
