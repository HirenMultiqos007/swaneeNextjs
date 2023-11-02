'use client'

import { usePathname } from "next/navigation"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"

// import GlobalStyle from '../components/common/GlobalStyle'
const MainLayout = ({ children, ...rest }) => {
    const pathname = usePathname()
    return (
        <>
            {/* <Suspense fallback={<HomePageLoader/>}> */}
            {/* <GlobalStyle/> */}
            <div className="header">
            <Header />
            <div className={`main ${pathname === "/" ? "homepage" : "" || pathname === "/contactus"  ?"contactpage":""}`}>
            {children}
            </div>
            <Footer />
            </div>
            {/* </Suspense> */}
        </>
    )
}
export default MainLayout
