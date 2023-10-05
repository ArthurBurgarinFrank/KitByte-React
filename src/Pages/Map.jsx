import Tiny from "../Components/tinyBox";
import ImgBell from "../assets/Images/bell.png";

import MapComp from "../Components/MapComponent";
import module from "../dependencies";

export default function Map() {
  const object = {
    title: "Exercícios",
    description: "WhatsApp",
    img: ImgBell,
  };

  return (
    <module.Grid>
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
          text={"Continue"}
          bdRadius={"100%"}
        />
      </module.Grid>
      <module.Grid>
        <MapComp selected={2} />
      </module.Grid>
    </module.Grid>
  );
}
