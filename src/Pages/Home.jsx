import Tiny from "../Components/tinyBox"
import ImgBell from "../assets/Images/bell.png"

import module from "../dependencies";

export default function Exercises() {
  const MyCourses = [
    {
      title: "Redes sociais,",
      description: "Conheça cada uma!",
      img: ImgBell
    },
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgBell
    },
    {
      title: "Exercícios",
      description: "WhatsApp",
      img: ImgBell
    }
  ];
  const courses = MyCourses.map((object, index) => (
    <Tiny key={index} text={"Conheça!"} title={object.title} description={object.description} img={object.img} contrast={false} fullWidth={false} />
  ));
    return (
      <module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
      }}>
        {courses}
      </module.Grid>
    );
  }