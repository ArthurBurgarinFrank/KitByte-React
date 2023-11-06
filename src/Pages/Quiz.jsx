import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import Answer from "../Components/Quiz/Answer";
import Question from "../Components/Quiz/Question";
import Result from "../Components/Quiz/Result";
import { useLocation } from "react-router-dom";

export default function Quiz() {
  const [Clicked, setClicked] = module.useState(false);
  const [MyContents, setMyContents] = module.useState();
  const [Response, setResponse] = module.useState();

  const location = useLocation();
  const description = location.state ? location.state.description : null;
  const img = location.state ? location.state.img : null;

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: "https://api-interdisciplinar.onrender.com/api/app/exercise?class_id=4",
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

  const handleOpen = (value) => {
    if (!Clicked) {
      setResponse(value);
    }
    setClicked(true);
  };
  const handleClose = () => {
    if (Clicked) {
      setClicked(false);
    }
  };

  module.useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, "1500");
  }, [Clicked]);

  if (!MyContents) {
    return null;
  }
  return (
    <div className="removeScroll">
      <module.Grid
        sx={{
          marginTop: 6.5,
          display: "flex",
          flexDirection: "column",
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
          <Tiny
            title={"Exercícios"}
            description={description}
            img={img}
            contrast={true}
            fullWidth={true}
            text={false}
            exerciseNumber={MyContents.id}
            bdRadius={"100%"}
          />
        </module.Grid>
        <module.Grid
          sx={{
            height: "76vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <module.Grid
            sx={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5%",
            }}
          >
            <Question announced={MyContents.enunciado} />
          </module.Grid>
          <module.Grid
            sx={{
              height: "70%",
              display: "flex",
            }}
          >
            <Answer object={MyContents} onClick={handleOpen} />
          </module.Grid>
        </module.Grid>
        {Clicked ? <Result answer={Response} /> : null}
      </module.Grid>
    </div>
  );
}
