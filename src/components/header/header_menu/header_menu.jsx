import m from "./header_menu.module.css"
import HeaderMenuLinks from "./header_menu_links/header_menu_links"
import HeaderMenuLogo from "./header_menu_logo/header_menu_logo"
import HeaderMenuSearch from "./header_menu_search/header_menu_search"

const HeaderMenu = (props) => {
    
    return (
        <div className={m.main}>
            <HeaderMenuLogo/>
            <HeaderMenuLinks/>
            <HeaderMenuSearch/>
        </div>
    )
}
export default HeaderMenu