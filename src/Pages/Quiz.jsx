import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import Answer from "../Components/Quiz/Answer";
import Question from "../Components/Quiz/Question";
import Result from "../Components/Quiz/Result";
import ImgBell from "../assets/Images/bell.png";


export default function Quiz() {
  
  const dataObject = {
    title: "Exercícios",
    description: "WhatsApp",
    img: ImgBell
  }

  const [Clicked, setClicked] = module.useState(false)

  const handleOpen = () => {
    setClicked(true)
  }
  const handleClose = () => {
    if (Clicked) {
      setClicked(false)
    }
  }

  module.useEffect(() => {
    setTimeout(() => {
      handleClose()
    }, "1500");
  }, [Clicked]);

  

  return (
    <div className="removeScroll">
      <module.Grid sx={{
        marginTop: 6.5,
        display: "flex",
        flexDirection: "column"
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
            title={dataObject.title}
            description={dataObject.description}
            contrast={true}
            fullWidth={true}
            text={false}
            exerciseNumber={1}
            bdRadius={"100%"}
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
            <Answer onClick={handleOpen} />
          </module.Grid>
        </module.Grid>
        {Clicked ? <Result answer={true} /> : null}
      </module.Grid>
    </div>
  );
}
