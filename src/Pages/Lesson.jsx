import ImgBell from "../assets/Images/bell.png"
import Tiny from "../Components/tinyBox";
import module from "../dependencies"

const Lesson = () => {

    const dataObject = [
        {
            title: "Aula 1",
            video: "url",
            img: ImgBell,
            content: "WhatsApp"
        },
        {
            title: "Aula 2",
            video: "url",
            img: ImgBell,
            content: "WhatsApp"
        },
        {
            title: "Aula 3",
            video: "url",
            img: ImgBell,
            content: "WhatsApp"
        }
    ]

    const lessons = dataObject.map((object, index) => (
        <Tiny object={object} title={object.content} bdRadius={"10%"} bgColor={"#707070"} course={true} key={index} text={"Conheça!"} contrast={true} fullWidth={false} />
    ));

    return (<module.Grid sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        paddingBottom: 10
    }}>
        <module.Grid
            sx={{
                backgroundColor: "#2880F2",
                width: "100vw",
                height: "18vh",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <module.Grid
                sx={{
                    width: "100vw",
                    height: "20vh",
                    backgroundColor: "#2880F2",
                    display: "flex",
                    borderRadius: 3,
                    zIndex: 2
                }}
            >
                <module.Grid
                    sx={{
                        width: "45%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <module.Grid
                        sx={{
                            backgroundColor: "#F3F3F3",
                            width: "60%",
                            height: "70%",
                            borderRadius: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={ImgBell} id="imgTemp" />
                    </module.Grid>
                </module.Grid>

                <module.Grid
                    sx={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 0.6,
                        justifyContent: "center",
                        color: "#FFFFFF",
                    }}
                >
                    <p>
                        <b>Aula {dataObject[0].content}</b>
                    </p>
                    <b>Vídeo aulas</b>
                </module.Grid>
            </module.Grid>
        </module.Grid>
        {lessons}
    </module.Grid>)
}
export default Lesson