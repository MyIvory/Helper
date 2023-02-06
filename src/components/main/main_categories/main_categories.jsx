
import c from "./main_categories.module.css"
import Category from "./main_categories_category/main_categories_category"
const Categories = (props) => {
    return (
        <div className={c.main} >
            
            <Category name="Діти" back_image="/img/dity.jpg" area="dity" count = "30"  route = "/posts/dety"/>
            <Category name="ЗСУ" back_image="/img/zsu.jpg" area="zsu" count = "24" route = "/posts/zsu"/>
            <Category name="біженці" back_image="/img/boy.jpg" area="boy" count = "49" route = "/posts/refugee"/>
            <Category name="інше" back_image="/img/other.jpg" area="other" count = "15" route = "/posts/other"/>
        </div>
    )
}
export default Categories