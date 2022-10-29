import classes from './allPosts.module.css'
import PostGrid from './postGrid'

const AllPosts = ({posts}) => {
    return (
        <section className={classes.posts}>
            <h2>All Posts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}

export default AllPosts