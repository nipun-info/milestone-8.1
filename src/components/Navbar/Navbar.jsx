import { useState } from "react";
import Link from "./Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" },
    ];

    return (
        <div>
            <nav className="bg-purple-700 text-white p-6">
                <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                    {open === true ? <IoCloseCircle /> : <HiMenuAlt1 />}
                </div>

                <ul
                    className={`md:flex gap-10 absolute md:static bg-purple-700 px-6
                    duration-1000 ${open ? "top-20" : "-top-60"} `}
                >
                    {routes.map((route, idx) => (
                        <Link key={idx} route={route} />
                    ))}
                </ul>
            </nav>
        </div>
    );

};

export default Navbar;
