
import module from "../../dependencies";
import ImgBell from "../../assets/Images/bell.png";

const Answer = (props) => {
    return (
        <module.Grid>
            <module.Grid sx={{
                display: "flex",
                padding: 1,
                gap: 1,
                width: "100vw",
                justifyContent: "center"
            }}>
                <module.Grid onClick={props.onClick} sx={{
                    backgroundColor: "gray",
                    width: "45%",
                    borderRadius: 6
                }}>
                    <img src={ImgBell} alt="" />
                </module.Grid>
                <module.Grid onClick={props.onClick} sx={{
                    backgroundColor: "gray",
                    width: "45%",
                    borderRadius: 6
                }}>
                    <img src={ImgBell} alt="" />
                </module.Grid>
            </module.Grid>
            <module.Grid sx={{
                display: "flex",
                padding: 1,
                gap: 1,
                width: "100vw",
                justifyContent: "center"
            }}>
                <module.Grid onClick={props.onClick} sx={{
                    backgroundColor: "gray",
                    width: "45%",
                    borderRadius: 6
                }}>
                    <img src={ImgBell} alt="" />
                </module.Grid>
                <module.Grid onClick={props.onClick} sx={{
                    backgroundColor: "gray",
                    width: "45%",
                    borderRadius: 6
                }}>
                    <img src={ImgBell} alt="" />
                </module.Grid>
            </module.Grid>
        </module.Grid>
    );
};

export default Answer;
