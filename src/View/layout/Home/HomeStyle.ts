/* Hallmark · redesign · pre-emit critique: P5 H5 E5 S5 R5 V4
 * genre: modern-minimal · macrostructure: Long Document / Workbench
 * theme: custom-tuned "Refined Slate" (light-mode, single indigo accent)
 * audience: senior hiring managers / tech leads
 * use: demonstrate Full-stack JS/TS engineering depth → drive contact
 * tone: utilitarian · technical-austere
 */

import { type CSSProperties } from 'react';

// ─── Token Block ─────────────────────────────────────────────────────────────
// All colour and type values flow through named tokens.
// Override here to retheme the entire page.

export const tokens = {
    // Paper scale (light mode)
    paper:       'oklch(98.5% 0.005 250)',   // near-white, barely-cool tint
    paperSubtle: 'oklch(96.5% 0.008 250)',   // slightly recessed surface
    paperCard:   'oklch(100% 0 0)',          // pure white card surface

    // Ink scale
    ink:         'oklch(14% 0.015 260)',     // near-black primary text
    inkMid:      'oklch(42% 0.012 255)',     // secondary text
    inkMuted:    'oklch(66% 0.008 255)',     // muted / meta text

    // Accent — single restrained indigo
    accent:      'oklch(52% 0.18 265)',      // indigo
    accentLight: 'oklch(52% 0.18 265 / 0.08)',  // tinted bg
    accentMid:   'oklch(52% 0.18 265 / 0.20)',  // border

    // Rule & border
    rule:        'oklch(90% 0.01 250)',      // hairline separator
    ruleDark:    'oklch(84% 0.012 250)',     // slightly heavier border

    // Shadow
    shadow:      '0 2px 12px oklch(0% 0 0 / 0.06)',
    shadowMd:    '0 4px 24px oklch(0% 0 0 / 0.08)',

    // Typography
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontMono: "'ui-monospace', 'Cascadia Code', 'Consolas', monospace",
} as const;

// ─── Reusable section wrapper ─────────────────────────────────────────────────
export const sectionWrapper: CSSProperties = {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: 'clamp(72px, 10vw, 112px) clamp(20px, 5vw, 40px)',
};

// ─── Section label (replaces pill badge — lean left-accent style) ─────────────
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
    fontFamily: tokens.fontMono,
};

// ─── Section title ────────────────────────────────────────────────────────────
export const sectionTitle: CSSProperties = {
    fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)',
    fontWeight: 700,
    color: tokens.ink,
    margin: 0,
    letterSpacing: '-0.025em',
    lineHeight: 1.2,
    fontStyle: 'normal',
};

// ─── Section divider (hairline rule) ─────────────────────────────────────────
export const sectionDivider: CSSProperties = {
    width: '100%',
    height: '1px',
    backgroundColor: tokens.rule,
    border: 'none',
    margin: '32px 0 48px 0',
};

// ─── Main page styles ─────────────────────────────────────────────────────────
export const styles = {

    mainContainer: {
        marginTop: '80px',
        minHeight: '100vh',
        backgroundColor: tokens.paper,
        color: tokens.ink,
        fontFamily: tokens.fontSans,
        overflowX: 'hidden' as const,
    } as CSSProperties,

    // ── Hero / Summary ────────────────────────────────────────────────────────
    summaryContainer: {
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
        padding: 'clamp(72px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)',
        borderBottom: `1px solid ${tokens.rule}`,
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    } as CSSProperties,

    greetingTag: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 12px 4px 4px',
        borderRadius: '4px',
        backgroundColor: tokens.accentLight,
        border: `1px solid ${tokens.accentMid}`,
        color: tokens.accent,
        fontSize: '11.5px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        marginBottom: '32px',
        fontFamily: tokens.fontMono,
    } as CSSProperties,

    greetingDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: tokens.accent,
        // No glow — solid colour only
        flexShrink: 0,
        marginLeft: '6px',
    } as CSSProperties,

    greetingTitle: {
        fontSize: 'clamp(2.6rem, 6vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: '-0.035em',
        margin: '0 0 12px 0',
        color: tokens.ink,
        fontStyle: 'normal',
        overflowWrap: 'anywhere' as const,
        minWidth: 0,
    } as CSSProperties,

    // Typewriter line — accent colour, no glow
    highlightText: {
        color: tokens.accent,
        // No textShadow — clean, no glow
    } as CSSProperties,

    // Hero role tagline (static line below h1)
    heroTagline: {
        fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
        lineHeight: 1.6,
        color: tokens.inkMid,
        margin: '0 0 28px 0',
        fontFamily: tokens.fontMono,
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '6px 0',
    } as CSSProperties,

    heroTaglineSeparator: {
        color: tokens.inkMuted,
        margin: '0 10px',
    } as CSSProperties,

    summaryDescription: {
        fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
        lineHeight: 1.8,
        color: tokens.inkMid,
        margin: '0 0 40px 0',
        maxWidth: '860px',
    } as CSSProperties,

    heroCtas: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap' as const,
    } as CSSProperties,

    // Primary CTA: solid dark-ink fill — no gradient, no glow
    heroBtnPrimary: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '11px 26px',
        borderRadius: '6px',
        backgroundColor: tokens.ink,
        color: tokens.paper,
        fontWeight: 600,
        fontSize: '13.5px',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: 'background-color 0.2s ease, transform 0.15s ease',
        fontFamily: tokens.fontSans,
    } as CSSProperties,

    heroLocation: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13px',
        color: tokens.inkMuted,
        fontFamily: tokens.fontMono,
    } as CSSProperties,

    // ── Tech-stack tag row (hero section) ─────────────────────────────────────
    techStackRow: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '8px',
        marginBottom: '36px',
    } as CSSProperties,

    techTag: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '4px',
        backgroundColor: tokens.paperSubtle,
        border: `1px solid ${tokens.rule}`,
        color: tokens.inkMid,
        fontSize: '11.5px',
        fontWeight: 500,
        fontFamily: tokens.fontMono,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap' as const,
    } as CSSProperties,

    // ── Section containers ────────────────────────────────────────────────────
    educationSection: {
        ...sectionWrapper,
        paddingTop: 'clamp(64px, 8vw, 96px)',
    } as CSSProperties,

    skillsSection: {
        ...sectionWrapper,
        paddingTop: 0,
        marginTop: 0,
    } as CSSProperties,

    experiencesSection: {
        ...sectionWrapper,
        paddingTop: 0,
        marginTop: 0,
    } as CSSProperties,

    faqSection: {
        ...sectionWrapper,
        paddingTop: 0,
        marginTop: 0,
        paddingBottom: 'clamp(80px, 10vw, 120px)',
    } as CSSProperties,

    // ── Skills tag-cloud layout ───────────────────────────────────────────────
    skillsGrid: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '32px',
        width: '100%',
    } as CSSProperties,

    skillRow: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 160px) 1fr',
        gap: '16px 32px',
        alignItems: 'flex-start',
    } as CSSProperties,

    skillRowMobile: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '8px',
    } as CSSProperties,

    skillLabel: {
        fontSize: '12px',
        fontWeight: 700,
        color: tokens.inkMid,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        paddingTop: '4px',
        fontFamily: tokens.fontMono,
    } as CSSProperties,

    skillTagRow: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '7px',
    } as CSSProperties,

    skillTag: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: '4px',
        backgroundColor: tokens.paperSubtle,
        border: `1px solid ${tokens.ruleDark}`,
        color: tokens.inkMid,
        fontSize: '12px',
        fontWeight: 500,
        fontFamily: tokens.fontMono,
        whiteSpace: 'nowrap' as const,
        transition: 'border-color 0.18s ease, color 0.18s ease',
    } as CSSProperties,

    // ── Experience grid ───────────────────────────────────────────────────────
    experiencesInner: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
        gap: '24px',
    } as CSSProperties,

    // ── FAQ container ─────────────────────────────────────────────────────────
    faqContainer: {
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '4px',
    } as CSSProperties,

    // ── Legacy grid keys (kept to avoid breaking old refs) ───────────────────
    skillsGridMobile: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '16px',
        width: '100%',
    } as CSSProperties,

    skillsGridDesktop: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '16px',
        width: '100%',
    } as CSSProperties,

    skillsTitle: {
        fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
        fontWeight: 700,
        color: tokens.ink,
        margin: '0 0 12px 0',
    } as CSSProperties,

    experiencesTitle: {
        fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
        fontWeight: 700,
        color: tokens.ink,
        margin: '0 0 12px 0',
    } as CSSProperties,

    faqTitle: {
        fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
        fontWeight: 700,
        color: tokens.ink,
        margin: '0 0 12px 0',
    } as CSSProperties,
};
