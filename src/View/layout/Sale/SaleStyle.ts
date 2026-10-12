import type { CSSProperties } from 'react'

// Refined Slate tokens (light-mode)
export const tokens = {
    ink: 'oklch(14% 0.015 260)',
    inkMid: 'oklch(42% 0.012 255)',
    inkMuted: 'oklch(66% 0.008 255)',
    paper: 'oklch(98.5% 0.005 250)',
    paperSubtle: 'oklch(96.5% 0.008 250)',
    paperCard: 'oklch(100% 0 0)',
    accent: 'oklch(52% 0.18 265)',
    accentLight: 'oklch(52% 0.18 265 / 0.08)',
    accentMid: 'oklch(52% 0.18 265 / 0.20)',
    rule: 'oklch(90% 0.01 250)',
    shadow: '0 2px 12px oklch(0% 0 0 / 0.06)',
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontMono: "'ui-monospace', 'Cascadia Code', Consolas, monospace",
};

export const sectionBadge: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    paddingLeft: '12px',
    borderLeft: `3px solid ${tokens.accent}`,
    color: tokens.accent,
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    marginBottom: '4px',
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

    contactLink: {
        textDecoration: 'none',
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

    contactBtnHover: {
        transform: 'translateY(-1px)',
        backgroundColor: tokens.inkMid,
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

    // ── Search widget ──────────────────────────────────────────────────────────
    searchWidget: {
        width: '100%',
        marginTop: '24px',
        padding: '24px',
        borderRadius: '12px',
        backgroundColor: tokens.paperCard,
        border: `1px solid ${tokens.rule}`,
        boxShadow: tokens.shadow,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxSizing: 'border-box',
    } as CSSProperties,

    searchTitle: {
        margin: 0,
        fontSize: 'clamp(16px, 2.2vw, 19px)',
        fontWeight: 700,
        color: tokens.ink,
    } as CSSProperties,

    searchInputWrap: {
        position: 'relative',
        width: '100%',
    } as CSSProperties,

    searchInput: {
        width: '100%',
        padding: '12px 42px 12px 16px',
        borderRadius: '8px',
        border: `1px solid ${tokens.rule}`,
        backgroundColor: tokens.paper,
        color: tokens.ink,
        fontSize: '14px',
        fontFamily: tokens.fontSans,
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    } as CSSProperties,

    searchClearBtn: {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: tokens.inkMuted,
        fontSize: '16px',
        padding: '4px',
        lineHeight: 1,
    } as CSSProperties,

    suggestionRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center',
    } as CSSProperties,

    suggestionLabel: {
        fontSize: '12px',
        color: tokens.inkMuted,
        fontWeight: 500,
    } as CSSProperties,

    suggestionChip: {
        border: `1px solid ${tokens.rule}`,
        backgroundColor: tokens.paperSubtle,
        color: tokens.inkMid,
        fontSize: '12px',
        padding: '4px 10px',
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        fontFamily: tokens.fontSans,
    } as CSSProperties,

    suggestionChipActive: {
        backgroundColor: tokens.accent,
        color: tokens.paper,
        borderColor: tokens.accent,
    } as CSSProperties,

    searchResultsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginTop: '4px',
    } as CSSProperties,

    searchResultsCount: {
        fontSize: '13px',
        color: tokens.inkMid,
        fontWeight: 600,
    } as CSSProperties,

    searchResultEmpty: {
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: tokens.paperSubtle,
        color: tokens.inkMid,
        fontSize: '13.5px',
        lineHeight: 1.6,
    } as CSSProperties,

    searchResultItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    } as CSSProperties,

    searchResultItem: {
        padding: '14px 16px',
        borderRadius: '8px',
        border: `1px solid ${tokens.rule}`,
        backgroundColor: tokens.paper,
        boxShadow: tokens.shadow,
    } as CSSProperties,

    searchResultItemHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '6px',
    } as CSSProperties,

    searchResultTag: {
        fontSize: '11px',
        fontWeight: 700,
        color: tokens.accent,
        backgroundColor: tokens.accentLight,
        padding: '2px 8px',
        borderRadius: '4px',
        fontFamily: tokens.fontMono,
    } as CSSProperties,

    searchResultContent: {
        margin: 0,
        fontSize: '13.5px',
        lineHeight: 1.6,
        color: tokens.ink,
        whiteSpace: 'pre-line',
    } as CSSProperties,

    // ── Project card ──────────────────────────────────────────────────────────
    projectCardBase: {
        width: '100%',
        borderRadius: '10px',
        border: '1px solid transparent',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
    } as CSSProperties,

    projectCardSelected: {
        border: `1px solid ${tokens.accent}`,
        boxShadow: tokens.shadow,
    } as CSSProperties,

    // ── FAQ ───────────────────────────────────────────────────────────────────
    faqList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        width: '100%',
    } as CSSProperties,

    faqRow: {
        display: 'flex',
        gap: '16px',
        position: 'relative',
    } as CSSProperties,

    faqTimeline: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '32px',
        flexShrink: 0,
    } as CSSProperties,

    faqDot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: tokens.accent,
        border: `2px solid ${tokens.accentMid}`,
        marginTop: '20px',
        flexShrink: 0,
        zIndex: 1,
    } as CSSProperties,

    faqLine: {
        width: '1px',
        flex: 1,
        backgroundColor: tokens.rule,
        marginTop: '6px',
    } as CSSProperties,

    faqContentCol: {
        flex: 1,
    } as CSSProperties,

    faqContentColSpaced: {
        flex: 1,
        paddingBottom: '32px',
    } as CSSProperties,

    faqCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '14px 18px',
        borderRadius: '8px',
        backgroundColor: tokens.paperCard,
        border: `1px solid ${tokens.rule}`,
        boxShadow: tokens.shadow,
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    } as CSSProperties,

    faqCategoryBadge: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        backgroundColor: tokens.accentLight,
        border: `1px solid ${tokens.accentMid}`,
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 700,
        color: tokens.accent,
        letterSpacing: '0.06em',
        width: 'fit-content',
        marginBottom: '4px',
        fontFamily: tokens.fontMono,
    } as CSSProperties,

    faqQuestion: {
        fontSize: 'clamp(14px, 1.8vw, 16px)',
        fontWeight: 700,
        margin: 0,
        color: tokens.ink,
        fontFamily: tokens.fontSans,
    } as CSSProperties,

    faqAnswer: {
        margin: '6px 0 0 0',
        color: tokens.inkMid,
        fontSize: '13px',
        lineHeight: 1.6,
        fontFamily: tokens.fontSans,
    } as CSSProperties,
}