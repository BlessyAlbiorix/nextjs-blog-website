import FeaturedPosts from "../components/homePage/featuredPosts"
import { Hero } from "../components/homePage/hero"

const posts = [
    {
        slug : 'getting-started-with-nextjs', 
        title : 'Getting started with nextjs', 
        image : 'getting-started-nextjs.png', 
        excerpt : 'Nextjs is react framework for production. It makes building production ready React apps bit easier', 
        date : '2022-02-10'
    },
    {
        slug : 'getting-started-with-nextjs1', 
        title : 'Getting started with nextjs', 
        image : 'getting-started-nextjs.png', 
        excerpt : 'Nextjs is react framework for production. It makes building production ready React apps bit easier', 
        date : '2022-02-10'
    },
    {
        slug : 'getting-started-with-nextjs2', 
        title : 'Getting started with nextjs', 
        image : 'getting-started-nextjs.png', 
        excerpt : 'Nextjs is react framework for production. It makes building production ready React apps bit easier', 
        date : '2022-02-10'
    },
]

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts}/>
        </>
    )
}

export default HomePage