import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import { useLocation } from "react-router-dom";
import imgVideo from "../assets/Images/imgVideo.png";

const Lesson = () => {
  const location = useLocation();
  const img = location.state ? location.state.img : null;
  const description = location.state ? location.state.description : null;
  const [MyContents, setMyContents] = module.useState();

  var txt = sessionStorage.getItem("email")

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: "https://api-interdisciplinar.onrender.com/api/app/lessons?id=1",
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
  }, []);

  var lessons;
  if (MyContents) {
    lessons = MyContents.map((object, index) => (
      <Tiny
        title={`Aula ${index + 1}`}
        description={object.descricao}
        img={imgVideo}
        bdRadius={"10%"}
        bgColor={"#707070"}
        course={true}
        key={index}
        text={"Conheça!"}
        contrast={true}
        fullWidth={false}
      />
    ));
  }

  return (
    <module.Grid
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        paddingBottom: 10,
        marginTop: 6.5,
      }}
    >
      {!img ? <module.Navigate to="/" /> : null}

      <module.Grid
        sx={{
          backgroundColor: "#2880F2",
          width: "100vw",
          height: "18vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <module.Grid
          sx={{
            width: "100vw",
            height: "20vh",
            backgroundColor: "#2880F2",
            display: "flex",
            borderRadius: 3,
            zIndex: 2,
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
              <img src={img} id="imgTemp" />
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
              <b>Aula {description}</b>
            </p>
            <b>Vídeo {txt}</b>
          </module.Grid>
        </module.Grid>
      </module.Grid>
      {lessons}
    </module.Grid>
  );
};
export default Lesson;
