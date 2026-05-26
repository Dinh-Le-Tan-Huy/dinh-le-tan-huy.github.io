import type { CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';
import { radius } from '../../DesignSystem/Radius';
import { spacing } from '../../DesignSystem/Spacing';
import { typography } from '../../DesignSystem/Typography';

export const Headerstyle = {
    HeaderWrapper: {
        position: "fixed",
        top: "clamp(10px, 2vw, 20px)",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        maxWidth: "98vw",
        display: "flex",
        alignItems: "center",
        padding: `0 ${spacing.md}`,
        height: "clamp(55px, 8vw, 70px)",
        backgroundColor: "rgba(11, 38, 102, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${Colors.glassBorder}`,
        borderRadius: radius.circle,
        gap: spacing.md,
        zIndex: 9999,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
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
        border: "none",
        cursor: "pointer",
        padding: spacing.sm,
        backgroundColor: "rgba(163, 163, 165, 0.23)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background-color 0.2s ease",
    } as CSSProperties,

    NavLink: {
        color: Colors.textSecondary,
        ...typography.body2,
        cursor: "pointer",
        transition: "color 0.2s ease",
        textDecoration: "none",
    } as CSSProperties,

    ButtonContact: {
        borderRadius: radius.button,
        border: "none",
        cursor: "pointer",
        padding: "8px 20px",
        backgroundColor: Colors.cyan,
        color: Colors.navyDark,
        ...typography.label2,
        boxShadow: `0 4px 15px ${Colors.cyanDim}`,
        transition: "all 0.3s ease",
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
};