import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Đợi DOM render xong rồi mới scroll
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
