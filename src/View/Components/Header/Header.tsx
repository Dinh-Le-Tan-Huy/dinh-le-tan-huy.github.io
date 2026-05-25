import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headerstyle } from "./HeaderStyle";
import { DotGrid } from "../Dot";
import { Link } from "react-router-dom";
import { HeaderNav } from "./HeaderData";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [gridHover, setGridHover] = useState(false);

    return (
        <motion.header
            className="header"
            style={Headerstyle.HeaderWrapper}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <Link to="/" style={Headerstyle.LogoLink}>
                <motion.div
                    layout
                    style={Headerstyle.LogoContainer}
                >
                    <img
                        src="https://ik.imagekit.io/gw4av6kyj/New%20Folder/logo.png"
                        alt="Logo"
                        style={Headerstyle.LogoImg}
                    />
                </motion.div>
            </Link>

            <AnimatePresence mode="popLayout">
                {open && (
                    <motion.div
                        className="containerText"
                        layout
                        style={Headerstyle.ContainerText}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={Headerstyle.NavListWrapper}>
                            {HeaderNav.map((item, index) => (
                                <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
                                    <span style={Headerstyle.NavLink}>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout className="dot" style={Headerstyle.ContainerButton}>
                <button style={Headerstyle.ButtonContact}>
                    <Link to="/contact" style={Headerstyle.ButtonContactLink}>
                        <span>Contact</span>
                    </Link>
                </button>

                <button
                    className="buttonDot"
                    style={Headerstyle.ButtonDot}
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => setGridHover(true)}
                    onMouseLeave={() => setGridHover(false)}
                >
                    <DotGrid
                        hovered={gridHover}
                        open={open}
                    />
                </button>
            </motion.div>
        </motion.header>
    )
}

export default Header;