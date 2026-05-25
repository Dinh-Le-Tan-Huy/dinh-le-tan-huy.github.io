export const Headerstyle: Record<string, React.CSSProperties> = {
    HeaderWrapper: {
        position: "fixed",
        top: "clamp(10px, 2vw, 20px)",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        maxWidth: "98vw", // increased slightly to give more room
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(5px, 2vw, 20px)", // reduced min padding
        height: "clamp(55px, 8vw, 70px)",
        backgroundColor: "#1c498a",
        fontFamily: "sans-serif",
        borderRadius: "40px",
        gap: "clamp(5px, 2vw, 20px)", // reduced min gap
        zIndex: 9999,
        overflow: "hidden", 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
    },
    ContainerText: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        marginRight: "clamp(5px, 2vw, 30px)", // reduced min margin
    },

    ContainerButton: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "clamp(5px, 2vw, 30px)", // reduced min gap
        flexShrink: 0, // don't shrink the buttons container
    },
    ButtonDot: {
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        padding: "clamp(4px, 1vw, 10px)",
        flexShrink: 0,
    },

    NavLink: {
        color: "#d1e2fa",
        fontSize: "clamp(11px, 1.5vw, 15px)", // reduced min font size
        fontWeight: "400",
        cursor: "pointer",
        transition: "color 0.3s",
    },

    ButtonContact: {
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        padding: "clamp(6px, 1.5vw, 10px) clamp(8px, 2vw, 24px)", // reduced min padding
        backgroundColor: "rgb(28, 219, 230)",
        color: "#0a254a",
        fontWeight: "bold",
        fontSize: "clamp(11px, 1.5vw, 15px)", // reduced min font size
        boxShadow: "0 4px 15px rgba(28, 219, 230, 0.3)",
        transition: "all 0.3s ease",
        whiteSpace: "nowrap",
        flexShrink: 0,
    },
};