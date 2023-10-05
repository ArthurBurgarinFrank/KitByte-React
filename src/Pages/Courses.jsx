import ImgBell from "../assets/Images/bell.png"
import Tiny from "../Components/tinyBox";
import module from "../dependencies";

const Courses = () => {
    const MyCourses = [
        {
            title: "Aula",
            description: "WhatsApp",
            img: ImgBell
        },
        {
            title: "Aula",
            description: "WhatsApp",
            img: ImgBell
        }
    ];
    const courses = MyCourses.map((object, index) => (
        <Tiny bdRadius={"100%"} bgColor={"#2880F2"} key={index} text={"Conheça!"} title={object.title} description={object.description} img={object.img} contrast={true} fullWidth={false} />
    ));
    return (<module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
    }}>
        {courses}
    </module.Grid>)
}
export default Courses