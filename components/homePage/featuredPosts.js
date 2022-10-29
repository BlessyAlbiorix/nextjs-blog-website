import PostGrid from '../posts/postGrid'
import classes from './featuredPosts.module.css'

const FeaturedPosts = ({posts}) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}

export default FeaturedPosts