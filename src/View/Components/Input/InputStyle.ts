import { type CSSProperties } from 'react';


export const InputStyle: Record<string, CSSProperties> = {
    wrapper: {
        width: "100%",
        position: "relative" // Thêm cái này để dễ căn chỉnh nếu cần
    },
    label: {
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold"
    },
    input: {
        width: "100%",
        padding: "12px 4px",
        boxSizing: "border-box",
        background: "transparent",
        color: "var(--text-h)",
        border: "none",
        outline: "none",
        fontSize: "15px",
        fontFamily: "inherit",
        transition: "border-bottom-color 0.25s ease",
    },
    statusStyle: {
        fontSize: "12px",
        textAlign: "right",
        marginTop: "4px",
        color: "var(--text)",
        opacity: 0.6,
    },
};