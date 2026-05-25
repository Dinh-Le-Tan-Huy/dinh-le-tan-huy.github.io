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
        <motion.header className="header"
            style={Headerstyle.HeaderWrapper}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <motion.div layout style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginRight: "clamp(2px, 1vw, 30px)", flexShrink: 0, gap: "clamp(6px, 1.5vw, 10px)" }}>
                    <img
                        src="https://ik.imagekit.io/gw4av6kyj/New%20Folder/logo.png"
                        alt="Logo"
                        style={{
                            height: "clamp(28px, 10vw, 80px)",
                            width: "auto",
                            objectFit: "contain"
                        }}
                    />
                </motion.div>
            </Link>

            <AnimatePresence mode="popLayout">
                {open && (
                    <motion.div className="containerText"
                        layout
                        style={Headerstyle.ContainerText}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{ display: "flex", gap: "clamp(8px, 2vw, 40px)", whiteSpace: "nowrap" }}>
                            {HeaderNav.map((item, index) => (
                                <Link to={item.path} key={index}>
                                    <span style={Headerstyle.NavLink}>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout className="dot" style={Headerstyle.ContainerButton}>
                <button style={Headerstyle.ButtonContact}>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <span style={{ textDecoration: "none", textDecorationLine: "none" }} >Contact</span>
                    </Link>
                </button>

                <button className="buttonDot"
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