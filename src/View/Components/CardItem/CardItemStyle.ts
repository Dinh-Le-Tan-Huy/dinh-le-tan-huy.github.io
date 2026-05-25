import { type CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';

export const styles = {
    // ── Default Variant ───────────────────────────────────────────────────────
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 'clamp(24px, 3vw, 60px)',
        alignItems: 'flex-start',
        padding: '28px 32px',
        marginTop: '20px',
        borderRadius: '16px',
        background: Colors.glassSurface,
        border: `1px solid ${Colors.glassBorder}`,
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
    } as CSSProperties,

    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: '0 0 200px',
        minWidth: '160px',
    } as CSSProperties,

    title: {
        fontSize: 'clamp(18px, 2.5vw, 22px)',
        fontWeight: 700,
        color: Colors.cyan,
        margin: 0,
        letterSpacing: '-0.01em',
    } as CSSProperties,

    description: {
        fontSize: '14px',
        fontWeight: 500,
        color: Colors.textSecondary,
        margin: 0,
        lineHeight: 1.5,
    } as CSSProperties,

    time: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '12px',
        fontWeight: 600,
        color: Colors.coral,
        margin: 0,
        padding: '3px 10px',
        borderRadius: '99px',
        backgroundColor: Colors.coralDim,
        width: 'fit-content',
    } as CSSProperties,

    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        flex: 2.5,
        textAlign: 'left',
        minWidth: '240px',
    } as CSSProperties,

    responsibilityItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        fontSize: '14px',
        fontWeight: 400,
        color: Colors.textSecondary,
        margin: 0,
        lineHeight: 1.7,
    } as CSSProperties,

    responsibilityDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: Colors.cyan,
        flexShrink: 0,
        marginTop: '7px',
    } as CSSProperties,

    // ── Note Variant ──────────────────────────────────────────────────────────
    noteContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.navyCard,
        padding: '24px 20px 20px 20px',
        marginTop: '0',
        borderRadius: '14px',
        border: `1px solid ${Colors.glassBorder}`,
        width: '100%',
        boxShadow: 'none',
        transition: 'border-color 0.3s ease, transform 0.2s ease',
        overflow: 'hidden',
    } as CSSProperties,

    noteTopRightIcon: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        opacity: 0.6,
    } as CSSProperties,

    noteLeftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '100%',
        marginBottom: '16px',
        paddingBottom: '14px',
        borderBottom: `1px solid ${Colors.glassBorder}`,
    } as CSSProperties,

    noteTitle: {
        fontSize: '16px',
        fontWeight: 700,
        color: Colors.cyan,
        margin: 0,
        letterSpacing: '-0.01em',
    } as CSSProperties,

    noteDescription: {
        fontSize: '13px',
        fontWeight: 500,
        color: Colors.textSecondary,
        margin: 0,
        lineHeight: 1.5,
    } as CSSProperties,

    noteTime: {
        fontSize: '12px',
        fontWeight: 600,
        color: Colors.coral,
        margin: 0,
    } as CSSProperties,

    noteDivider: {
        height: '1px',
        backgroundColor: Colors.glassBorder,
        width: '100%',
        margin: '12px 0',
    } as CSSProperties,

    noteRightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
    } as CSSProperties,

    noteResponsibilityItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
    } as CSSProperties,

    noteListIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1px',
        flexShrink: 0,
    } as CSSProperties,

    noteItemText: {
        fontSize: '13px',
        fontWeight: 400,
        color: Colors.textSecondary,
        margin: 0,
        textAlign: 'left',
        lineHeight: 1.5,
    } as CSSProperties,
};