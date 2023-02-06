import h from "./header.module.css"
import HeaderMenu from "./header_menu/header_menu"
import HeaderSlider from "./header_slider/header_slider"

const Header = (props) => {
    
    return (
        <div className={`${h.main}`}>
            <HeaderMenu/>
            <HeaderSlider/>
        </div>
    )
}
export default Header