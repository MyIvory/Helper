import m from "./header_menu_links_link.module.css"
import {NavLink } from "react-router-dom"
const HeaderMenuLink = (props) => {

    return (
        <div className={m.main}>
            <NavLink to={props.route}>{props.name}</NavLink>
        </div>
    )
}
export default HeaderMenuLink