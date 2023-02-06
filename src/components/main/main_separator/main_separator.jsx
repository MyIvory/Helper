import m from "./main_separator.module.css"
const MainSeparator = (props) => {
    var s = {
        gridArea:props.area,
        maxWidth:props.width
    }
    return (
        <main className={m.main} style = {s}>
            <div className={m.name}>{props.name}</div>
            <div className={m.line}></div>
        </main>
    )
}
export default MainSeparator