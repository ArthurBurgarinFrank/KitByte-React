import Grid from "@mui/material/Grid";

const Players = (props) => {
    const myPlayer = props.player
    return <Grid sx={{
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
    </Grid>
}
export default Players