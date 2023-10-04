import Tiny from "../Components/tinyBox"
import module from "../dependencies";

export default function Exercises() {
  const location = module.useLocation();
  const {object} = location.state;

  const Tasks = object.map((object, index) => (
    <Tiny key={index} text={"Começar!"} title={object.title} description={object.description} img={object.img} contrast={true} fullWidth={false} />
  ));
    return (
      <module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
      }}>
        {Tasks}
      </module.Grid>
    );
  }