import { type CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';

// ─── Reusable section wrapper style ──────────────────────────────────────────
export const sectionWrapper: CSSProperties = {
    width: '100%',
    padding: '0 clamp(16px, 5vw, 80px)',
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

// ─── Reusable section header (pill badge + title) ────────────────────────────
export const sectionBadge: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px 14px',
    borderRadius: '99px',
    backgroundColor: Colors.cyanDim,
    border: `1px solid ${Colors.cyanBorder}`,
    color: Colors.cyan,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '12px',
};

export const sectionTitle: CSSProperties = {
    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
    fontWeight: 700,
    color: Colors.textPrimary,
    margin: 0,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
};

export const sectionDivider: CSSProperties = {
    width: '48px',
    height: '3px',
    borderRadius: '4px',
    background: `linear-gradient(90deg, ${Colors.cyan}, transparent)`,
    marginTop: '12px',
    marginBottom: '40px',
    alignSelf: 'flex-start',
};

// ─── Main page styles ─────────────────────────────────────────────────────────
export const styles = {
    mainContainer: {
        marginTop: '80px',
        color: Colors.textPrimary,
        minHeight: '100vh',
        backgroundColor: Colors.navyDark,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Hero / Summary ────────────────────────────────────────────────────────
    summaryContainer: {
        padding: 'clamp(48px, 8vw, 100px) clamp(16px, 5vw, 80px)',
        background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,216,255,0.08) 0%, transparent 60%),
            ${Colors.navyDark}
        `,
        borderBottom: `1px solid ${Colors.glassBorder}`,
        marginBottom: '16px',
    } as CSSProperties,

    greetingTag: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px',
        borderRadius: '99px',
        backgroundColor: Colors.cyanDim,
        border: `1px solid ${Colors.cyanBorder}`,
        color: Colors.cyan,
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        marginBottom: '28px',
    } as CSSProperties,

    greetingDot: {
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: Colors.cyan,
        boxShadow: `0 0 8px ${Colors.cyan}`,
    } as CSSProperties,

    greetingTitle: {
        fontSize: 'clamp(2.4rem, 6vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        margin: '0 0 28px 0',
        color: Colors.textPrimary,
    } as CSSProperties,

    highlightText: {
        color: Colors.cyan,
        textShadow: `0 0 40px ${Colors.cyanGlow}`,
    } as CSSProperties,

    summaryDescription: {
        fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
        lineHeight: 1.8,
        width: '100%',
        maxWidth: '100%',
        color: Colors.textSecondary,
        margin: 0,
    } as CSSProperties,

    heroCtas: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginTop: '40px',
        flexWrap: 'wrap' as const,
    } as CSSProperties,

    heroBtnPrimary: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 28px',
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${Colors.cyan}, #0097b2)`,
        color: Colors.navyDark,
        fontWeight: 700,
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        boxShadow: `0 4px 24px ${Colors.cyanGlow}`,
        transition: 'all 0.3s ease',
    } as CSSProperties,

    // ── Education Section ─────────────────────────────────────────────────────
    educationSection: {
        ...sectionWrapper,
    } as CSSProperties,

    // ── Skills Section ────────────────────────────────────────────────────────
    skillsSection: {
        ...sectionWrapper,
    } as CSSProperties,

    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
    } as CSSProperties,

    skillsGridMobile: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '16px',
        width: '100%',
    } as CSSProperties,

    // ── Legacy skill grids (kept for backward compat with Home.tsx) ───────────
    skillsGridDesktop: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
        gap: '20px',
        width: '100%',
    } as CSSProperties,

    // ── Experiences Section ────────────────────────────────────────────────────
    experiencesSection: {
        ...sectionWrapper,
    } as CSSProperties,

    experiencesInner: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
    } as CSSProperties,

    // ── FAQs Section ─────────────────────────────────────────────────────────
    faqSection: {
        ...sectionWrapper,
        paddingBottom: '80px',
    } as CSSProperties,

    faqContainer: {
        width: '100%',
        maxWidth: '760px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '12px',
        margin: '0 auto',
    } as CSSProperties,

    // ─── Legacy keys — kept to avoid breaking existing Home.tsx refs ──────────
    skillsTitle: {
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 700,
        color: Colors.textPrimary,
        margin: '0 0 12px 0',
    } as CSSProperties,

    experiencesTitle: {
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 700,
        color: Colors.textPrimary,
        margin: '0 0 12px 0',
    } as CSSProperties,

    faqTitle: {
        fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
        fontWeight: 700,
        color: Colors.textPrimary,
        margin: '0 0 12px 0',
    } as CSSProperties,
};
