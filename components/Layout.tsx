import Footer from "./Footer";
import Header from "./Header";
import { FC, ReactNode } from 'react'

type layoutProps = {
    children: ReactNode
}

const Layout:FC<layoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;