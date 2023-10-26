import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import MapComp from "../Components/MapComponent";
import { useLocation } from "react-router-dom";

export default function Map() {
  const [MyContents, setMyContents] = module.useState()

  async function myFunc() {
    await module.axios({  
      method: "get",
      url: "https://api-interdisciplinar.onrender.com/api/app/currentclass?user_id=1&course_id=1",
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
    <div className="removeScroll">
      <module.Grid>
        <module.Grid
          sx={{
            backgroundColor: "#2880F2",
            width: "100vw",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            marginTop: 6.5
          }}
        >
          <Tiny
            title={"Exercícios"}
            // description={description}
            // img={img}
            contrast={true}
            fullWidth={true}
            text={"Continue"}
            bdRadius={"100%"}
          />
        </module.Grid>
        <module.Grid>
          <MapComp selected={MyContents} />
        </module.Grid>
      </module.Grid>
    </div>
  );
}
