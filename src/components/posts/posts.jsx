import Post from "./post/post"
import m from "./posts.module.css"

const Posts = (props) => {
    var path = window.location.pathname
    let post_data_arr = [
        { id: 1, collected: 3000, left: 20000 },
        { id: 2, collected: 1000, left: 40000 },
        { id: 3, collected: 53000, left: 20000 },
        { id: 4, collected: 13000, left: 2000 },
        { id: 5, collected: 3000, left: 10000 },
        { id: 6, collected: 4000, left: 80000 },
        { id: 7, collected: 34000, left: 132000 },
        { id: 8, collected: 30040, left: 80000 },
        { id: 9, collected: 300, left: 20000 },
        { id: 10, collected: 76000, left: 10000 }
    ]
    let posts = post_data_arr.map(post => <Post id={post.id} collected={post.collected} left={post.left} key={post.id}/> )
    return (
        <div className={m.main}>
            {posts}
        </div>
    )
}
export default Posts