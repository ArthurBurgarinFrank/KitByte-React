import Tiny from "../Components/tinyBox";
import ImgBell from "../assets/Images/bell.png";

import Answer from "../Components/Quiz/Answer";
import Question from "../Components/Quiz/Question";
import Result from "../Components/Quiz/Result";
import module from "../dependencies";

export default function Quiz() {
  const object = {
    title: "Exercícios",
    description: "WhatsApp",
    img: ImgBell,
  };

  return (
    <module.Grid sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3
    }}>
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
          title={object.title}
          description={object.description}
          img={object.img}
          contrast={true}
          fullWidth={true}
          text={false}
          exerciseNumber={1}
        />
      </module.Grid>

      <module.Grid sx={{
        height: "76vh",
        display: "flex",
        flexDirection: "column"
      }}>

        <module.Grid sx={{
          height: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%"
        }}>
          <Question />
        </module.Grid>

        <module.Grid sx={{
          height: "70%",
          display: "flex"
        }}>
          <Answer />
        </module.Grid>
        
      </module.Grid>
      <Result />
    </module.Grid>
  );
}
