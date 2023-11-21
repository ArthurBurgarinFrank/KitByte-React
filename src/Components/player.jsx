import module from "../dependencies"

const Players = (props) => {
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
        <p>{props.player.nome_usuario}</p>
        <p>{props.player.pontos} pts</p>
    </module.Grid>
}
export default Players