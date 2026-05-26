import type { CSSProperties } from "react";
import { Colors } from "../../DesignSystem/Colors";

export const styles: Record<string, CSSProperties> = {
    footer: {
        backgroundColor: Colors.navyMid,
        borderTop: `1px solid ${Colors.glassBorder}`,
        padding: 'clamp(40px, 6vw, 60px) clamp(20px, 6vw, 80px) clamp(20px, 4vw, 30px)',
        width: '100%',
    },

    topRow: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '40px',
        paddingBottom: '40px',
    },

    topRowMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        paddingBottom: '30px',
    },

    name: {
        fontSize: 'clamp(28px, 6vw, 72px)',
        fontWeight: 800,
        color: Colors.textPrimary,
        margin: 0,
        lineHeight: 1.1,
        letterSpacing: '-1px',
        textAlign: 'center',
    },

    linkList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-start',
    },

    linkListMobile: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        alignItems: 'center',
    },

    link: {
        color: Colors.textSecondary,
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 400,
        transition: 'color 0.2s ease',
    },

    divider: {
        border: 'none',
        borderTop: `1px solid ${Colors.glassBorder}`,
        margin: 0,
    },

    bottomRow: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
    },

    bottomRowMobile: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    },

    copyright: {
        fontSize: '13px',
        color: Colors.textMuted,
        margin: 0,
    },
};