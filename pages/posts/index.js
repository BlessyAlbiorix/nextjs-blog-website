import AllPosts from "../../components/posts/allPosts"
import { posts } from "../index"

const AllPostsPage = () => {
    return (
        <AllPosts posts={posts}/>
    )
}

export default AllPostsPage