import module from "../../dependencies";
import greenLogo from "../../assets/Images/kitLogoGreen.png"
import redLogo from "../../assets/Images/kitLogoRed.png"

const Result = (props) => {
    return (
        <module.Grid sx={{
            backgroundColor: props.answer ? "#B7FFD4" : "#FFB0B0",
            width: "90%",
            height: "20%",
            padding: 2,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: "5%",
            top: "40%"
        }}>
            <module.Grid sx={{
                width: "35%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: props.answer ? "flex-end" : "flex-start",
                alignItems: "center"
            }}>
                <img src={props.answer ? greenLogo : redLogo} style={{ width: props.answer ? "140%" : "80%", height: props.answer ? "140%" : "80%"}} />
            </module.Grid>

            <module.Grid sx={{
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1
            }}>
                <h2 style={{ textAlign: "center", color: "#000" }}>
                    {props.answer ? "Muito Bem!" : "Não foi"}
                </h2>
                <h2 style={{ textAlign: "center", color: "#000" }}>
                    {props.answer ? "Você acertou" : "dessa vez"}
                </h2>
            </module.Grid>


        </module.Grid>
    );
};

export default Result;