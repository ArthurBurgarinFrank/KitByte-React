import module from "../dependencies"

const Players = (props) => {
    const myPlayer = props.player
    return <module.Grid sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "3%",
        backgroundColor: props.background,
        color: props.color,
        borderRadius: 8,
        width: "98%"
    }}>
        <h3>#{props.index}</h3>
        <p>{myPlayer.name}</p>
        <p>{myPlayer.pts} pts</p>
    </module.Grid>
}
export default Players