import module from "../dependencies";

export default function Video() {
  const navigate = module.useNavigate();

  const handlePage = () => {
    navigate("/courses")
  }
  return (
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
  );
}
