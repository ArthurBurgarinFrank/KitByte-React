import Grid from "@mui/material/Grid";

const Players = (props) => {
    const myPlayer = props.player
    return <Grid sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "3%",
        backgroundColor: "red",
        borderRadius: 8,
        width: "98%"
    }}>
        <p>#1</p>
        <p>{myPlayer.name}</p>
        <p>{myPlayer.pts}</p>
    </Grid>
}
export default Players