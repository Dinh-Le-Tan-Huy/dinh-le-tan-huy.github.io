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
    shadow:      '0 2px 12px oklch(0% 0 0 / 0.06)',
    fontSans:    "'Inter', system-ui, -apple-system, sans-serif",
};

export const styles = {
    container: {
        marginBottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%',
    } as CSSProperties,

    questionWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
    } as CSSProperties,

    questionButton: {
        padding: 'clamp(14px, 2vw, 18px) clamp(16px, 3vw, 20px)',
        borderRadius: '8px',
        border: `1px solid ${t.rule}`,
        backgroundColor: t.paperCard,
        color: t.ink,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        fontSize: 'clamp(13px, 1.5vw, 14.5px)',
        fontWeight: 500,
        lineHeight: '1.5',
        textAlign: 'left',
        width: '100%',
        transition: 'background-color 0.18s ease, border-color 0.18s ease',
        fontFamily: t.fontSans,
        boxShadow: t.shadow,
    } as CSSProperties,

    iconWrapper: (isOpen: boolean): CSSProperties => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '22px',
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        border: `1.5px solid ${isOpen ? t.accent : t.inkMuted}`,
        color: isOpen ? t.accent : t.inkMuted,
        fontSize: '18px',
        lineHeight: 1,
        flexShrink: 0,
        transition: 'transform 0.25s ease, border-color 0.25s ease, color 0.25s ease',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
    }),

    answerWrapper: (isOpen: boolean): CSSProperties => ({
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: isOpen ? '4px' : '0px',
        maxHeight: isOpen ? '600px' : '0px',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        width: '100%',
        transition: 'max-height 0.4s ease, opacity 0.3s ease, margin-top 0.25s ease',
    }),

    answerBubble: {
        padding: '16px 20px',
        backgroundColor: t.paperSubtle,
        border: `1px solid ${t.rule}`,
        color: t.inkMid,
        borderRadius: '0 8px 8px 8px',
        width: '100%',
        fontSize: 'clamp(13px, 1.4vw, 14px)',
        lineHeight: '1.75',
        fontWeight: 400,
        fontFamily: t.fontSans,
    } as CSSProperties,
};
