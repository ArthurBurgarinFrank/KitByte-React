import Tiny from "../Components/tinyBox";
import module from "../dependencies";

const Courses = (props) => {
    
    const Lessons = props.lessons.map((object, index) => (
        <Tiny object={object} bdRadius={"100%"} bgColor={"#2880F2"} key={index} text={"Conheça!"} contrast={true} fullWidth={false} />
    ));
    return (<module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        padding: 10
    }}>
        {Lessons}
    </module.Grid>)
}
export default Courses