import module from "../dependencies";
import Tiny from "../Components/tinyBox";

const Courses = () => {
  const [MyContents, setMyContents] = module.useState();

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: "https://api-interdisciplinar.onrender.com/api/app/all",
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

  var lessons
  if (MyContents) {
  lessons = MyContents.map((object, index) => (
    <Tiny
      title={"Aula"}
      description={object.app}
      img={object.foto_curso}
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
      }}
    >
      {lessons}
    </module.Grid>
  );
};

export default Courses;
