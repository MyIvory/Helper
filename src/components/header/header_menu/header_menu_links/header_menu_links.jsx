import m from "./header_menu_links.module.css"
import HeaderMenuLink from "./header_menu_links_link/header_menu_links_link"

const HeaderMenuLinks = (props) => {
    
    return (
        <div className={m.main}>
            <HeaderMenuLink name = "Головна" route="/"/>
            <HeaderMenuLink name = "Link 2"/>
            <HeaderMenuLink name = "Link 3"/>
            <HeaderMenuLink name = "Link 4"/>
        </div>
    )
}
export default HeaderMenuLinks