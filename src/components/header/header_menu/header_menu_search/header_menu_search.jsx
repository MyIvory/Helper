import m from "./header_menu_search.module.css"


const HeaderMenuSearch = (props) => {
    return (
        <div className={m.main}>
                <input type="text" className={m.input} placeholder="Поиск"></input>
                <i className="fas fa-search" aria-hidden="true"></i>
        </div>
    )
}
export default HeaderMenuSearch