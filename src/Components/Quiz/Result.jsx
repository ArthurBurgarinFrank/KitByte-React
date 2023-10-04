import module from "../../dependencies";
import greenLogo from "../../assets/Images/kitLogoGreen.png"
import redLogo from "../../assets/Images/kitLogoRed.png"

const Result = () => {
    return (
        <module.Grid sx={{
            backgroundColor: "#B7FFD4",
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
                backgroundColor: "red",
                width: "20%",
                height: "100%",
                display: "flex",
                justifyContent: "top",
                alignItems: "center"
            }}>
                <img src={greenLogo} style={{ verticalAlign: 'middle', marginLeft: '5px', width: "150%", height: "150%", backgroundColor: "red" }} />
            </module.Grid>
            
            <module.Grid sx={{
                backgroundColor: "yellow",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                <h2 style={{ textAlign: "center", color: "#000" }}>
                    Muito Bem!
                </h2>
                <h2 style={{ textAlign: "center", color: "#000" }}>
                    Você acertou
                </h2>
            </module.Grid>


        </module.Grid>
    );
};

export default Result;