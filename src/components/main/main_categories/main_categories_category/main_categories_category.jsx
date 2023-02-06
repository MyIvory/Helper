import { NavLink } from "react-router-dom"
import c from "./main_categories_category.module.css"

const Category = (props) => {
    var s = {
        backgroundImage: `url(${props.back_image})`,
        gridArea: props.area
    }
    return (
        <NavLink to = {props.route}>
            <div className={c.main} style={s} onClick={() => { console.log(props.name) }}>
                <div className={c.name}><span>{props.name}</span></div>
                <div className={c.count}><span>{props.count}</span></div>
            </div>
        </NavLink>
    )
}
export default Category