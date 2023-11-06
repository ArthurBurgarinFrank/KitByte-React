import module from "../../dependencies";

const Question = (props) => {
    return (
        <module.Grid sx={{
            backgroundColor: "#71E5FF",
            width: "100%",
            height: "90%",
            padding: 2,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h2 style={{ textAlign: "center", fontWeight: "normal", color: "#006EFD" }}>
                {props.announced}
            </h2>
        </module.Grid>
    );
};

export default Question;
