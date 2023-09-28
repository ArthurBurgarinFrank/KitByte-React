import Task from "../Components/Task"
import ImgWhats from "../assets/Images/whatsApp.png"

import module from "../dependencies";

export default function Exercises() {
  const MyTasks = [
    {
      name: "WhatsApp",
      img: ImgWhats
    },
    {
      name: "Instagram",
      img: ""
    },
    {
      name: "YouTube",
      img: ""
    }
  ];
  const Tasks = MyTasks.map((object, index) => (
    <Task key={index} text={object.name} img={object.img} />
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