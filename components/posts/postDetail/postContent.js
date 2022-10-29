import ReactMarkdown from 'react-markdown'
import classes from './postContent.module.css'
import PostHeader from './postHeader'

const post = {
    slug : 'getting-started-with-nextjs', 
    title : 'Getting started with nextjs', 
    image : 'getting-started-nextjs.png',
    content : '# This is my first post', 
    date : '2022-02-10'
}

const PostContent = () => {

    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}/>
            <ReactMarkdown>
                {post?.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent