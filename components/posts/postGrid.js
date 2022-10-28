import classes from './postGrid.module.css'

const PostGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
        {
            posts?.map(post => <postItem key={post.id}/>)
        }
        </ul>
    )
}

export default PostGrid