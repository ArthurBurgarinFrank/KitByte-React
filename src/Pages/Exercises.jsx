import Tiny from "../Components/tinyBox"
import ImgWhats from "../assets/Images/whatsApp.png"

import module from "../dependencies";

export default function Exercises() {
  const MyTasks = [
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgWhats
    },
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgWhats
    },
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgWhats
    }
  ];
  const Tasks = MyTasks.map((object, index) => (
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