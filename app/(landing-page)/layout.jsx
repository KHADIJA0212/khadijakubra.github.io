import { Navbar } from "../layouts/Navbar";

export default function LandingPageLayout({ children }) {
    return (
        <>
            <div className="relative">
                <Navbar></Navbar>
                <div>{children}</div>
            </div>
        </>
    )
}