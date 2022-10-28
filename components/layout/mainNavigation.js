import Link from "next/link"
import Logo from "./logo"

const MainNavigation = () => {
    return (
        <header>
            <Link href="/">
                <a>
                    <Logo />
                </a>
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