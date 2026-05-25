import { type CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';
import { radius } from '../../DesignSystem/Radius';
import { spacing } from '../../DesignSystem/Spacing';
import { typography } from '../../DesignSystem/Typography';

export const CardInfoStyle = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        width: '100%',
    } as CSSProperties,

    timelineItem: {
        display: 'flex',
        gap: spacing.md, // 16px
        position: 'relative',
    } as CSSProperties,

    timelineCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '32px',
        flexShrink: 0,
    } as CSSProperties,

    dot: {
        width: '12px',
        height: '12px',
        borderRadius: radius.circle,
        backgroundColor: Colors.cyan,
        boxShadow: `0 0 10px ${Colors.cyanGlow}`,
        marginTop: '18px',
        flexShrink: 0,
        zIndex: 1,
    } as CSSProperties,

    line: {
        width: '1px',
        flex: 1,
        background: `linear-gradient(to bottom, ${Colors.cyanBorder}, transparent)`,
        marginTop: '6px',
    } as CSSProperties,

    contentWrapper: {
        flex: 1,
    } as CSSProperties,

    card: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '14px 18px',
        borderRadius: radius.item, // 12px
        background: Colors.glassSurface,
        border: `1px solid ${Colors.glassBorder}`,
        transition: 'border-color 0.3s ease',
    } as CSSProperties,

    yearBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '3px 10px',
        backgroundColor: Colors.cyanDim,
        border: `1px solid ${Colors.cyanBorder}`,
        borderRadius: radius.pill, // 9999px / 40px
        color: Colors.cyan,
        letterSpacing: '0.06em',
        width: 'fit-content',
        marginBottom: '4px',
        ...typography.caption,
        fontWeight: 700, // override caption default weight
    } as CSSProperties,

    schoolTitle: {
        fontSize: 'clamp(14px, 1.8vw, 16px)',
        fontWeight: 700,
        margin: 0,
        color: Colors.textPrimary,
        fontFamily: typography.body1.fontFamily,
    } as CSSProperties,

    degreeText: {
        color: Colors.textSecondary,
        margin: 0,
        fontSize: '13px',
        fontFamily: typography.body1.fontFamily,
        lineHeight: 1.5,
    } as CSSProperties,
};
