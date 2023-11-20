import module from "../dependencies";
import ReactPlayer from "react-player";

export default function Video() {
  const [Url, setUrl] = module.useState();

  const navigate = module.useNavigate();
  const location = module.useLocation();
  const id = location.state ? location.state.id : null;
  const index = location.state ? location.state.index : null;

  module.useEffect(() => {
    if (id == 6 && index == 1) {
      setUrl("https://youtu.be/7RgJZStcnhc?si=6XGZkVQsqpvjBFEF");
    } else if (id == 6 && index == 2) {
      setUrl("https://youtu.be/K-qSNH-PxMI?si=y3gOzICeIQ2pkFbx");
    } else if (id == 4 && index == 1) {
      setUrl("https://youtu.be/QRQLjvISl2A?si=_2Ql3CS4x9uKTvmG");
    } else if (id == 4 && index == 2) {
      setUrl("https://youtu.be/Ku-oQHcFrcc?si=3IYMIOcZkRQr6wWn");
    }
  }, [id]);

  const handlePage = () => {
    navigate("/courses");
  };

  console.log(id);
  console.log(index);

  return !Url ? (
    <module.Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={true}
    >
      <module.DialogTitle id="alert-dialog-title">
        {"Nenhum video disponível para esse curso"}
      </module.DialogTitle>

      <module.DialogActions>
        <module.Button onClick={handlePage} autoFocus>
          Ok
        </module.Button>
      </module.DialogActions>
    </module.Dialog>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ReactPlayer
        url={Url}
        width="65vw"
        height="65vh"
        controls={true}
        playing={true}
      />
    </div>
  );
}
