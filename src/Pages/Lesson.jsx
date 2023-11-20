import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import imgVideo from "../assets/Images/imgVideo.png";
import Footer from "../Components/footer";

const Lesson = () => {
  const location = module.useLocation();
  const img = location.state ? location.state.img : null;
  const description = location.state ? location.state.description : null;
  const id = location.state ? location.state.id : null;
  const [MyContents, setMyContents] = module.useState();

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: `https://api-interdisciplinar.onrender.com/api/app/lessons?id=${id}`,
      })
      .then((response) => {
        setMyContents(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const [Email, setEmail] = module.useState("");
  module.useEffect(() => {
    if (window.Android) {
      const userEmail = window.Android.parametrosFront();
      setEmail(userEmail);
    }
  }, []);

  async function myFuncAlter() {
    try {
      await module.axios(
        `https://api-interdisciplinar.onrender.com/api/app/setlastclass?course_id=${id}&email=${Email}`
      );
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  module.useEffect(() => {
    myFunc();
    myFuncAlter();
  }, [Email]);

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
        index={index+1}
        id={id}
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
        paddingBottom: 15,
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
            <b>Vídeo aulas</b>
          </module.Grid>
        </module.Grid>
      </module.Grid>
      {lessons}
      <Footer />
    </module.Grid>
  );
};
export default Lesson;
