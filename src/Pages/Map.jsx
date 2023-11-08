import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import MapComp from "../Components/MapComponent";
import { useLocation } from "react-router-dom";
import Footer from "../Components/footer";

export default function Map() {
  const [MyContents, setMyContents] = module.useState();
  const location = useLocation();
  var img, description, id;
  if (location.state) {
    img = location.state.img;
    description = location.state.description;
    id = location.state.id;
  } else {
    const searchParams = new URLSearchParams(location.search);
    img = searchParams.get("img");
    description = searchParams.get("description");
  }

  const [Email, setEmail] = module.useState("");
  module.useEffect(() => {
    if (window.Android) {
      const userEmail = window.Android.parametrosFront();
      setEmail(userEmail);
    }
  }, []);

  async function myFunc() {
    if (id) {
      await module
        .axios({
          method: "GET",
          url: `https://api-interdisciplinar.onrender.com/api/app/currentclass?email=${Email}&course_id=${id}`,
        })
        .then((response) => {
          setMyContents(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  module.useEffect(() => {
    myFunc();
  }, [Email]);

  if (id) {
    console.log(id);
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
            marginTop: 6.5,
            paddingBottom: 15
          }}
        >
          <Tiny
            title={"Exercícios"}
            description={MyContents ? MyContents.nome_curso : description}
            img={MyContents ? MyContents.imagem : img}
            id={id ? id : null}
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
      <Footer />
    </div>
  );
}
