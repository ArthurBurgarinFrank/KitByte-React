import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import Footer from "../Components/footer";

const Courses = () => {
  const [MyContents, setMyContents] = module.useState();

  async function myFunc() {
    await module
      .axios("https://api-interdisciplinar.onrender.com/api/app/all")
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
        title={"Aula"}
        description={object.app}
        img={object.foto_curso}
        id={object.id}
        bdRadius={"100%"}
        bgColor={"#2880F2"}
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
        padding: 10,
        paddingBottom: 15,
      }}
    >
      {lessons}
      <Footer />
    </module.Grid>
  );
};

export default Courses;
