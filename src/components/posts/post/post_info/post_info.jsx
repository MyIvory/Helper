
import p from "./post_info.module.css"
import PostInfoBut from "./post_info_but/post_info_but"
import PostInfoDate from "./post_info_date/post_info_date"
import PostInfoDescription from "./post_info_description/post_info_description"

const PostInfo = (props) =>{
    return (
        <div className = {p.post}>
            <PostInfoDescription/>
            <PostInfoDate/>
            <PostInfoBut/>
        </div>
    )
}
export default PostInfo