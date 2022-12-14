import Link from "next/link"
import Logo from "./logo"
import classes from './mainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href="/posts">All Posts</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default MainNavigation