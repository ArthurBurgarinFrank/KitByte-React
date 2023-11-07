import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import MapComp from "../Components/MapComponent";
import { useLocation } from "react-router-dom";

export default function Map() {
  const [MyContents, setMyContents] = module.useState();
  const location = useLocation();
  const img = location.state ? location.state.img : null;
  const description = location.state ? location.state.description : null;
  const id = location.state ? location.state.id : null;

  const [Email, setEmail] = module.useState("")
  module.useEffect(() => {
    if (window.Android) {
      const userEmail = window.Android.parametrosFront();
      setEmail(userEmail)
    }
  }, []);

  async function myFunc() {
    const req = id
      ? `https://api-interdisciplinar.onrender.com/api/app/currentclass?email=${Email}&course_id=${id}`
      : `https://api-interdisciplinar.onrender.com/api/app/currentclass?email=${Email}&course_id=1`;
    await module
      .axios({
        method: "GET",
        url: req,
      })
      .then((response) => {
        setMyContents(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  module.useEffect(() => {
    myFunc();
  }, [Email]);

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
            marginTop: 6.5,
          }}
        >
          <Tiny
            title={"Exercícios"}
            description={MyContents ? MyContents.nome_curso : description}
            img={MyContents ? MyContents.imagem : img}
            contrast={true}
            fullWidth={true}
            text={"Continue"}
            bdRadius={"100%"}
          />
        </module.Grid>
        <module.Grid>
          <MapComp
            description={MyContents ? MyContents.nome_curso : description}
            img={MyContents ? MyContents.imagem : img}
            selected={MyContents ? MyContents.indice_aula : 1}
          />
        </module.Grid>
      </module.Grid>
    </div>
  );
}
