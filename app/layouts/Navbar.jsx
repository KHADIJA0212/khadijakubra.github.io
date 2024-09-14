import { NavButton } from "../components/NavButton";

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="flex gap-2">
                    <div>facebook</div>
                    <div>insta</div>
                    <div>twitter</div>
                </div>
                <div className="flex gap-2">
                    <NavButton />
                    <NavButton />
                    <NavButton />
                </div>
            </div>
        </nav>
    )
}