import MainNavigation from "./mainNavigation"

const Layout = ({ children}) => {
    return (
        <>
            <MainNavigation/>
            <main>
                {children} 
            </main>
        </>
    )
}

export default Layout