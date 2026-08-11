import type { CSSProperties } from 'react'

// Refined Slate tokens (light-mode)
export const tokens = {
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
    fontMono:    "'ui-monospace', 'Cascadia Code', Consolas, monospace",
};

export const sectionBadge: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    borderLeft: `3px solid ${tokens.accent}`,
    color: tokens.accent,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    marginBottom: '16px',
    width: 'fit-content',
    fontFamily: tokens.fontMono,
}

export const sectionTitle: CSSProperties = {
    fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)',
    fontWeight: 700,
    color: tokens.ink,
    margin: 0,
    letterSpacing: '-0.025em',
    lineHeight: 1.2,
    fontStyle: 'normal',
    fontFamily: tokens.fontSans,
}

export const sectionDivider: CSSProperties = {
    width: '100%',
    height: '1px',
    backgroundColor: tokens.rule,
    border: 'none',
    margin: '32px 0 48px 0',
}

export const styles = {
    mainSection: {
        marginTop: '80px',
        minHeight: '100vh',
        backgroundColor: tokens.paper,
        color: tokens.ink,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: tokens.fontSans,
        overflowX: 'hidden' as const,
    } as CSSProperties,

    contentContainer: {
        width: '100%',
        maxWidth: '960px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        paddingBottom: 'clamp(80px, 10vw, 120px)',
    } as CSSProperties,

    headerContainer: {
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(72px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        gap: '20px',
        borderBottom: `1px solid ${tokens.rule}`,
        marginBottom: '40px', // add space before the next section
    } as CSSProperties,

    headerTitle: {
        fontSize: 'clamp(2.6rem, 6vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: '-0.035em',
        margin: '0 0 12px 0',
        color: tokens.ink,
        fontStyle: 'normal',
    } as CSSProperties,

    headerSpan: {
        color: tokens.accent,
        // textShadow removed
    } as CSSProperties,

    headerText: {
        fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
        lineHeight: 1.8,
        maxWidth: '1080px',
        color: tokens.inkMid,
        margin: '0 0 20px 0',
    } as CSSProperties,

    contactBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px 26px',
        borderRadius: '6px',
        backgroundColor: tokens.ink,
        color: tokens.paper,
        fontWeight: 600,
        fontSize: '13.5px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'none',
        transition: 'background-color 0.2s ease, transform 0.15s ease',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        fontFamily: tokens.fontSans,
    } as CSSProperties,

    sectionWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px)',
    } as CSSProperties,

    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        width: '100%',
    } as CSSProperties,

    gridContainer2Col: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
        width: '100%',
    } as CSSProperties,

    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
    } as CSSProperties,

    faqContainer: {
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    } as CSSProperties,
}