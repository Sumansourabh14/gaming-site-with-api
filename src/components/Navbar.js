import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const navElements = [
        {
            id: 1,
            name: "Games",
            link: ""
        },
        {
            id: 2,
            name: "Explore",
            link: ""
        },
        {
            id: 3,
            name: "Shop",
            link: ""
        },
        {
            id: 4,
            name: "Help",
            link: ""
        },
    ];

    const [navbar, setNavbar] = useState(false);

    function handleClick() {
        setNavbar(!navbar);
    }

    return (
        <header id="header" className="py-2 px-8 bg-stone-900 text-stone-100 fixed left-0 right-0 z-50">
            <nav className="container mx-auto flex justify-between lg:items-center">
                <strong className="text-3xl">GAME</strong>
                <ul className={(navbar ? "flex" : "hidden") + " lg:flex flex-col lg:flex-row absolute left-0 top-12 py-2 right-0 px-8 opacity-95 bg-stone-900 h-screen lg:h-auto lg:px-0 lg:mt-0 lg:static"}>
                    {navElements.map(navEl => {
                        return (
                            <li key={navEl.id} className="hover:bg-slate-100 hover:text-black font-bold lg:px-8 py-4 lg:py-2 duration-150 text-center">
                                <a href={navEl.link}>{navEl.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <a onClick={handleClick} className="lg:hidden hover:cursor-pointer">
                    <FontAwesomeIcon icon={faBarsStaggered} className="text-4xl" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faBarsStaggered} className="text-4xl" />
                </a>
            </nav>
        </header>
    )   
}

export default Navbar;