
import Categories from "./main_categories/main_categories"
import m from "./main.module.css"
import Important from "./main_important/main_important"
import TopSponsors from "./main_topSponsors/main_topSponsors"
import MainSeparator from "./main_separator/main_separator"
const Main = (props) => {
    return (
        <main className={m.main}>
            <MainSeparator name="категорії" area="sep_cat" width = "745px"/>
            <Categories />
            <MainSeparator name ="важливе" area ="sep_imp" width = "745px"/>
            <Important />
            <MainSeparator name="топ спонсори" area="sep_sp"/>
            <TopSponsors/>
        </main>
    )
}
export default Main