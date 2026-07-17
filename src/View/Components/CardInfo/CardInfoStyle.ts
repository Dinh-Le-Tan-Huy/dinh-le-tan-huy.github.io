import { type CSSProperties } from 'react';

// Refined Slate tokens (light-mode)
const t = {
    ink:         'oklch(14% 0.015 260)',
    inkMid:      'oklch(42% 0.012 255)',
    inkMuted:    'oklch(66% 0.008 255)',
    paperCard:   'oklch(100% 0 0)',
    accent:      'oklch(52% 0.18 265)',
    accentLight: 'oklch(52% 0.18 265 / 0.08)',
    accentMid:   'oklch(52% 0.18 265 / 0.20)',
    rule:        'oklch(90% 0.01 250)',
    shadow:      '0 2px 12px oklch(0% 0 0 / 0.06)',
    fontSans:    "'Inter', system-ui, -apple-system, sans-serif",
    fontMono:    "'ui-monospace', 'Cascadia Code', Consolas, monospace",
};

export const CardInfoStyle = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        width: '100%',
    } as CSSProperties,

    timelineItem: {
        display: 'flex',
        gap: '16px',
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
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: t.accent,
        // No glow — solid accent dot only
        border: `2px solid ${t.accentMid}`,
        marginTop: '20px',
        flexShrink: 0,
        zIndex: 1,
    } as CSSProperties,

    line: {
        width: '1px',
        flex: 1,
        backgroundColor: t.rule,
        marginTop: '6px',
    } as CSSProperties,

    contentWrapper: {
        flex: 1,
    } as CSSProperties,

    card: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: '14px 18px',
        borderRadius: '8px',
        backgroundColor: t.paperCard,
        border: `1px solid ${t.rule}`,
        boxShadow: t.shadow,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    } as CSSProperties,

    yearBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '2px 8px',
        backgroundColor: t.accentLight,
        border: `1px solid ${t.accentMid}`,
        borderRadius: '4px',
        color: t.accent,
        letterSpacing: '0.06em',
        width: 'fit-content',
        marginBottom: '4px',
        fontSize: '11px',
        fontWeight: 700,
        fontFamily: t.fontMono,
    } as CSSProperties,

    schoolTitle: {
        fontSize: 'clamp(13px, 1.8vw, 15px)',
        fontWeight: 700,
        margin: 0,
        color: t.ink,
        fontFamily: t.fontSans,
    } as CSSProperties,

    degreeText: {
        color: t.inkMid,
        margin: 0,
        fontSize: '12.5px',
        fontFamily: t.fontSans,
        lineHeight: 1.5,
    } as CSSProperties,
};
