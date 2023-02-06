
import p from "./post.module.css"
import PostAvatar from "./post_avatar/post_avatar"
import PostBar from "./post_bar/post_bar"
import PostInfo from "./post_info/post_info"

const Post = (props) =>{
    return (
        <div className = {p.post}>
            <PostAvatar/>
            <PostInfo/>
            <PostBar collected = {props.collected} left = {props.left}/>
        </div>
    )
}
export default Post