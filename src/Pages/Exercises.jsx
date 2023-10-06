import Tiny from "../Components/tinyBox";
import module from "../dependencies";

const Exercises = (props) => {
    var index
    return (<module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
    }}>
        <Tiny index={index ? index : ""} object={props.exercise} bdRadius={"100%"} bgColor={"#2880F2"} key={1} text={"Começar!"} title={props.exercise.title} description={props.exercise.description} img={props.exercise.img} contrast={true} fullWidth={false} />
    </module.Grid>)
}
export default Exercises