import classes from './postGrid.module.css'
import PostItem from './postItem'

const PostGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
        {
            posts?.map(post => <PostItem key={post.slug} post={post}/>)
        }
        </ul>
    )
}

export default PostGrid