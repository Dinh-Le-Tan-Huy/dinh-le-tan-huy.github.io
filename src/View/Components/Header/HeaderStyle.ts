import type { CSSProperties } from 'react';
import { radius } from '../../DesignSystem/Radius';
import { spacing } from '../../DesignSystem/Spacing';
import { typography } from '../../DesignSystem/Typography';

// Light-mode tokens matching Home / Refined Slate
const t = {
    ink: 'oklch(14% 0.015 260)',
    inkMid: 'oklch(42% 0.012 255)',
    inkMuted: 'oklch(66% 0.008 255)',
    paper: 'oklch(98.5% 0.005 250)',
    paperCard: 'oklch(100% 0 0)',
    paperTrans: 'oklch(100% 0 0 / 0.85)',
    accent: 'oklch(52% 0.18 265)',
    accentLight: 'oklch(52% 0.18 265 / 0.08)',
    rule: 'oklch(90% 0.01 250)',
    shadow: '0 8px 24px oklch(0% 0 0 / 0.08)',
    shadowLg: '0 20px 40px oklch(0% 0 0 / 0.12)',
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
};

export const Headerstyle = {
    HeaderWrapper: {
        position: "fixed",
        top: "clamp(5px, 2vw, 0px)",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        maxWidth: "98vw",
        display: "flex",
        alignItems: "center",
        padding: `0 ${spacing.md}`,
        height: "clamp(55px, 8vw, 70px)",
        backgroundColor: t.paperTrans,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${t.rule}`,
        borderRadius: radius.circle,
        gap: spacing.md,
        zIndex: 9999,
        boxShadow: t.shadow,
    } as CSSProperties,

    LogoLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    } as CSSProperties,

    LogoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: spacing.sm,
        flexShrink: 0,
        gap: spacing.xs,
    } as CSSProperties,

    LogoImg: {
        height: "clamp(28px, 6vw, 42px)",
        width: "auto",
        objectFit: "contain",
        filter: "invert(1) contrast(1.5)", // Adjusting logo for light mode assuming it was white
    } as CSSProperties,

    ContainerText: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        marginRight: spacing.sm,
    } as CSSProperties,

    NavListWrapper: {
        display: "flex",
        gap: spacing.lg,
        whiteSpace: "nowrap",
    } as CSSProperties,

    ContainerButton: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: spacing.sm,
        flexShrink: 0,
    } as CSSProperties,

    ButtonDot: {
        borderRadius: radius.circle,
        border: `1px solid ${t.rule}`,
        cursor: "pointer",
        padding: spacing.sm,
        backgroundColor: t.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background-color 0.2s ease, transform 0.1s ease",
        color: t.inkMid,
    } as CSSProperties,

    NavLink: {
        color: t.inkMid,
        ...typography.body2,
        fontWeight: 500,
        fontFamily: t.fontSans,
        cursor: "pointer",
        transition: "color 0.2s ease",
        textDecoration: "none",
    } as CSSProperties,

    ButtonContact: {
        borderRadius: "99px",
        border: "none",
        cursor: "pointer",
        padding: "8px 20px",
        backgroundColor: t.ink,
        color: t.paper,
        fontSize: "13.5px",
        fontWeight: 600,
        fontFamily: t.fontSans,
        transition: "background-color 0.2s ease, transform 0.15s ease",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    } as CSSProperties,

    ButtonContactLink: {
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    } as CSSProperties,

    LangWrapper: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
    } as CSSProperties,

    LangButton: {
        borderRadius: "99px",
        border: `1px solid ${t.rule}`,
        cursor: "pointer",
        padding: "7px 14px",
        backgroundColor: t.paperCard,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        color: t.inkMid,
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: t.fontSans,
        transition: "background-color 0.2s ease, border-color 0.2s ease",
        whiteSpace: "nowrap" as const,
        letterSpacing: "0.03em",
    } as CSSProperties,

    LangPopup: {
        position: "absolute",
        top: "calc(100% + 10px)",
        right: 0,
        minWidth: "160px",
        backgroundColor: t.paperTrans,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${t.rule}`,
        borderRadius: "14px",
        boxShadow: t.shadowLg,
        overflow: "hidden",
        zIndex: 99999,
        padding: "6px",
    } as CSSProperties,

    LangPopupHeader: {
        padding: "8px 12px 6px",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: t.inkMuted,
        fontFamily: t.fontSans,
    } as CSSProperties,

    LangOption: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "9px 12px",
        borderRadius: "9px",
        cursor: "pointer",
        color: t.inkMid,
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: t.fontSans,
        transition: "background-color 0.15s ease",
        border: "none",
        backgroundColor: "transparent",
        width: "100%",
        textAlign: "left" as const,
    } as CSSProperties,

    LangOptionActive: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "9px 12px",
        borderRadius: "9px",
        cursor: "pointer",
        color: t.accent,
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: t.fontSans,
        transition: "background-color 0.15s ease",
        border: "none",
        backgroundColor: t.accentLight,
        width: "100%",
        textAlign: "left" as const,
    } as CSSProperties,

    HeaderWrapperMobile: {
        gap: spacing.sm,
        padding: `0 ${spacing.sm}`,
        top: "10px",
    } as CSSProperties,

    ContainerTextMobile: {
        position: "absolute",
        top: "calc(100% + 15px)",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: t.paperTrans,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${t.rule}`,
        borderRadius: radius.message,
        padding: spacing.lg,
        width: "max-content",
        minWidth: "200px",
        boxShadow: t.shadowLg,
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
    } as CSSProperties,

    NavListWrapperMobile: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.md,
        alignItems: "center",
        width: "100%",
        whiteSpace: "normal",
    } as CSSProperties,

    ButtonContactMobile: {
        padding: "8px 12px",
        fontSize: "12px",
    } as CSSProperties,

    LangButtonMobile: {
        padding: "6px 8px",
        fontSize: "12px",
    } as CSSProperties,
};