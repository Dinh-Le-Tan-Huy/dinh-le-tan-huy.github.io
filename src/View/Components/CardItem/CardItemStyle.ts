import { type CSSProperties } from 'react';

// Refined Slate tokens (light-mode)
const t = {
    ink:         'oklch(14% 0.015 260)',
    inkMid:      'oklch(42% 0.012 255)',
    inkMuted:    'oklch(66% 0.008 255)',
    paper:       'oklch(98.5% 0.005 250)',
    paperSubtle: 'oklch(96.5% 0.008 250)',
    paperCard:   'oklch(100% 0 0)',
    accent:      'oklch(52% 0.18 265)',
    accentLight: 'oklch(52% 0.18 265 / 0.08)',
    accentMid:   'oklch(52% 0.18 265 / 0.20)',
    rule:        'oklch(90% 0.01 250)',
    ruleDark:    'oklch(84% 0.012 250)',
    shadow:      '0 2px 12px oklch(0% 0 0 / 0.06)',
    fontSans:    "'Inter', system-ui, -apple-system, sans-serif",
    fontMono:    "'ui-monospace', 'Cascadia Code', Consolas, monospace",
};

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 'clamp(20px, 3vw, 48px)',
        alignItems: 'flex-start',
        padding: '28px 28px',
        marginTop: '0',
        borderRadius: '10px',
        backgroundColor: t.paperCard,
        border: `1px solid ${t.rule}`,
        boxShadow: t.shadow,
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        position: 'relative',
        overflow: 'hidden',
    } as CSSProperties,

    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: '0 0 200px',
        minWidth: '160px',
    } as CSSProperties,

    title: {
        fontSize: 'clamp(15px, 2vw, 18px)',
        fontWeight: 700,
        color: t.ink,
        margin: 0,
        letterSpacing: '-0.015em',
        fontFamily: t.fontSans,
    } as CSSProperties,

    description: {
        fontSize: '13px',
        fontWeight: 500,
        color: t.inkMid,
        margin: 0,
        lineHeight: 1.5,
        fontFamily: t.fontMono,
    } as CSSProperties,

    time: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '11px',
        fontWeight: 600,
        color: t.accent,
        margin: 0,
        padding: '2px 8px',
        borderRadius: '4px',
        backgroundColor: t.accentLight,
        border: `1px solid ${t.accentMid}`,
        width: 'fit-content',
        fontFamily: t.fontMono,
        letterSpacing: '0.04em',
    } as CSSProperties,

    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 2.5,
        textAlign: 'left',
        minWidth: '240px',
    } as CSSProperties,

    responsibilityItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        fontSize: '13px',
        fontWeight: 400,
        color: t.inkMid,
        margin: 0,
        lineHeight: 1.7,
    } as CSSProperties,

    responsibilityDot: {
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: t.accent,
        flexShrink: 0,
        marginTop: '8px',
    } as CSSProperties,

    // ── Note Variant ──────────────────────────────────────────────────────────
    noteContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: t.paperCard,
        padding: '22px 20px 18px 20px',
        marginTop: '0',
        borderRadius: '10px',
        border: `1px solid ${t.rule}`,
        width: '100%',
        boxShadow: t.shadow,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        overflow: 'hidden',
    } as CSSProperties,

    noteTopRightIcon: {
        position: 'absolute',
        top: '14px',
        right: '14px',
        opacity: 0.35,
    } as CSSProperties,

    noteLeftColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: '100%',
        marginBottom: '14px',
        paddingBottom: '12px',
        borderBottom: `1px solid ${t.rule}`,
    } as CSSProperties,

    noteTitle: {
        fontSize: '14px',
        fontWeight: 700,
        color: t.ink,
        margin: 0,
        letterSpacing: '-0.01em',
        fontFamily: t.fontSans,
    } as CSSProperties,

    noteDescription: {
        fontSize: '12px',
        fontWeight: 500,
        color: t.inkMid,
        margin: 0,
        lineHeight: 1.5,
        fontFamily: t.fontMono,
    } as CSSProperties,

    noteTime: {
        fontSize: '11px',
        fontWeight: 600,
        color: t.accent,
        margin: 0,
        fontFamily: t.fontMono,
    } as CSSProperties,

    noteDivider: {
        height: '1px',
        backgroundColor: t.rule,
        width: '100%',
        margin: '10px 0',
    } as CSSProperties,

    noteRightColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
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
        marginTop: '2px',
        flexShrink: 0,
    } as CSSProperties,

    noteItemText: {
        fontSize: '12.5px',
        fontWeight: 400,
        color: t.inkMid,
        margin: 0,
        textAlign: 'left',
        lineHeight: 1.55,
        fontFamily: t.fontSans,
    } as CSSProperties,
};