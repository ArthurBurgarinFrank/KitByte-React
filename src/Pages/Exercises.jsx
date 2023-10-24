import module from "../dependencies";
import Tiny from "../Components/tinyBox";
import ImgBell from "../assets/Images/bell.png";

const Exercises = () => {

    const dataObject = [
        {
            title: "Exercícios",
            description: "WhatsApp",
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
    ]

    const exercises = dataObject.map((object, index) => (
        <Tiny title={object.title} description={object.description} bdRadius={"100%"} bgColor={"#2880F2"} key={index} text={"Conheça!"} contrast={true} fullWidth={false} />
    ))

    var index
    return (<module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
    }}>
        {exercises}
    </module.Grid>)
}
export default Exercises