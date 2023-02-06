
import p from "./post_info_date.module.css"

const PostInfoDate = (props) => {
    return (
        <div className={p.post}>
            <div className={p.time_start}>
                <i className="fa-solid fa-hourglass-start"></i>
                <div> 16.09.2022</div>
            </div>
            <div className={p.time_stop}>
                <i className="fa-solid fa-hourglass-end"></i>
                <div> 30.09.2022</div>
            </div>

        </div>
    )
}
export default PostInfoDate