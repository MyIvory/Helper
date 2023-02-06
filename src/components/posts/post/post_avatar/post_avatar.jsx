
import p from "./post_avatar.module.css"

const PostAvatar = (props) =>{
    return (
        <div className = {p.post}>
           <div className={p.author_img}>Avatar</div>
           <div className={p.author_name}>Name</div>
        </div>
    )
}
export default PostAvatar