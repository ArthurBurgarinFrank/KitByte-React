import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import Answer from "../Components/Quiz/Answer";
import Question from "../Components/Quiz/Question";
import Result from "../Components/Quiz/Result";
import Footer from "../Components/footer";

export default function Quiz() {
  const [Clicked, setClicked] = module.useState(false);
  const [MyContents, setMyContents] = module.useState();
  const [Response, setResponse] = module.useState();

  const [Email, setEmail] = module.useState("");
  module.useEffect(() => {
    if (window.Android) {
      const userEmail = window.Android.parametrosFront();
      setEmail(userEmail);
    }
  }, []);

  const location = module.useLocation();
  const description = location.state ? location.state.description : null;
  const img = location.state ? location.state.img : null;
  const id = location.state ? location.state.id : null;

  async function myFunc() {
    await module
      .axios({
        method: "get",
        url: `https://api-interdisciplinar.onrender.com/api/app/exercise?course_id=${id}&email=${Email}`,
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

  const navigate = module.useNavigate();

  const handlePage = () => {
    navigate("/exercises")
  }

  if (!MyContents) {
    return (
      <module.Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={true}
      >
        <module.DialogTitle id="alert-dialog-title">
          {"Nenhum exercício disponível para esse curso"}
        </module.DialogTitle>

        <module.DialogActions>
          <module.Button onClick={handlePage} autoFocus>
            Ok
          </module.Button>
        </module.DialogActions>
      </module.Dialog>
    );
  }
  return (
    <div className="removeScroll">
      <module.Grid
        sx={{
          marginTop: 6.5,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 15,
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
      <Footer />
    </div>
  );
}
