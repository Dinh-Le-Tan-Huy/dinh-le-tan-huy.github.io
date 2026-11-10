import type { CSSProperties } from 'react'

export const styles = {
    mainSection: {
        maxWidth: '100vw',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        backgroundColor: '#f8f9fc',
        position: 'relative',
        paddingBottom: '100px',
    } as CSSProperties,

    contentContainer: {
        padding: '0 30px',
        margin: '0 auto',
        maxWidth: '1100px',
        paddingTop: '120px',
        paddingBottom: '80px',
        boxSizing: 'border-box',
    } as CSSProperties,

    // ── Hero Banner ──────────────────────────────────────
    heroBanner: {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f2d52 100%)',
        borderRadius: '20px',
        padding: '48px 48px 40px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden',
    } as CSSProperties,

    heroBadge: {
        display: 'inline-block',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        color: '#7dd3fc',
        fontSize: '0.78rem',
        fontWeight: 700,
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        padding: '5px 14px',
        borderRadius: '50px',
        marginBottom: '16px',
        border: '1px solid rgba(125, 211, 252, 0.3)',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    heroTitle: {
        fontSize: '2.8rem',
        fontWeight: 900,
        color: '#ffffff',
        margin: '0 0 10px',
        lineHeight: 1.15,
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '-0.5px',
    } as CSSProperties,

    heroSlogan: {
        fontSize: '1.1rem',
        color: '#93c5fd',
        fontStyle: 'italic',
        margin: '0 0 16px',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    heroDesc: {
        fontSize: '1rem',
        color: '#cbd5e1',
        lineHeight: 1.7,
        margin: 0,
        maxWidth: '780px',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Info Grid ────────────────────────────────────────
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: '16px',
        marginBottom: '40px',
    } as CSSProperties,

    infoCard: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '20px 22px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        border: '1px solid #e8ecf3',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    } as CSSProperties,

    infoCardIcon: {
        fontSize: '1.5rem',
        marginBottom: '6px',
    } as CSSProperties,

    infoCardLabel: {
        fontSize: '0.72rem',
        fontWeight: 700,
        color: '#94a3b8',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    infoCardValue: {
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#0f172a',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    infoCardSub: {
        fontSize: '0.82rem',
        color: '#64748b',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Generic section ───────────────────────────────────
    section: {
        background: '#ffffff',
        borderRadius: '16px',
        padding: '28px 32px',
        marginBottom: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
        border: '1px solid #e8ecf3',
    } as CSSProperties,

    sectionTitle: {
        fontSize: '1.1rem',
        fontWeight: 800,
        color: '#0f172a',
        margin: '0 0 18px',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '-0.2px',
    } as CSSProperties,

    // ── Connection tags ───────────────────────────────────
    tagList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    } as CSSProperties,

    connectionTag: {
        display: 'flex',
        flexDirection: 'column',
        background: '#f0f7ff',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        padding: '10px 16px',
        minWidth: '180px',
        gap: '3px',
    } as CSSProperties,

    connectionDest: {
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#1e40af',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    connectionTime: {
        fontSize: '0.78rem',
        color: '#3b82f6',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Pills ─────────────────────────────────────────────
    pillRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
    } as CSSProperties,

    pill: {
        background: 'linear-gradient(135deg, #1e3a5f, #2563eb)',
        color: '#ffffff',
        borderRadius: '50px',
        padding: '7px 18px',
        fontSize: '0.85rem',
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.2px',
    } as CSSProperties,

    // ── Layout cards ──────────────────────────────────────
    layoutGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
        gap: '12px',
    } as CSSProperties,

    layoutCard: {
        background: 'linear-gradient(135deg, #f8faff, #eff6ff)',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        padding: '16px 18px',
        textAlign: 'center',
    } as CSSProperties,

    layoutBedroom: {
        fontSize: '1rem',
        fontWeight: 800,
        color: '#1e40af',
        fontFamily: "'Inter', sans-serif",
        marginBottom: '4px',
    } as CSSProperties,

    layoutArea: {
        fontSize: '0.9rem',
        color: '#374151',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
    } as CSSProperties,

    layoutUnit: {
        fontSize: '0.75rem',
        color: '#6b7280',
    } as CSSProperties,

    // ── Spec grid ─────────────────────────────────────────
    specGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
    } as CSSProperties,

    specItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '10px 0',
        borderBottom: '1px solid #f1f5f9',
        gap: '16px',
    } as CSSProperties,

    specLabel: {
        fontSize: '0.87rem',
        color: '#64748b',
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        flexShrink: 0,
    } as CSSProperties,

    specValue: {
        fontSize: '0.87rem',
        color: '#0f172a',
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        textAlign: 'right',
    } as CSSProperties,

    // ── Amenity grid ──────────────────────────────────────
    amenityCount: {
        fontSize: '0.82rem',
        color: '#64748b',
        margin: '-10px 0 14px',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    amenityGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
    } as CSSProperties,

    amenityCard: {
        background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
        border: '1px solid #a7f3d0',
        borderRadius: '12px',
        padding: '14px 16px',
    } as CSSProperties,

    amenityName: {
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#065f46',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    amenityDesc: {
        fontSize: '0.78rem',
        color: '#047857',
        marginTop: '4px',
        lineHeight: 1.4,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Progress grid ─────────────────────────────────────
    progressNote: {
        fontSize: '0.8rem',
        color: '#94a3b8',
        margin: '-10px 0 14px',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    progressGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
    } as CSSProperties,

    progressCard: {
        background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
        border: '1px solid #fcd34d',
        borderRadius: '12px',
        padding: '14px 16px',
    } as CSSProperties,

    progressBlock: {
        fontSize: '1rem',
        fontWeight: 800,
        color: '#92400e',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    progressPhase: {
        fontSize: '0.75rem',
        color: '#b45309',
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        marginBottom: '6px',
    } as CSSProperties,

    progressStatus: {
        fontSize: '0.8rem',
        color: '#78350f',
        lineHeight: 1.4,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── CTA Box ───────────────────────────────────────────
    ctaBox: {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        borderRadius: '20px',
        padding: '40px',
        marginTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '12px',
    } as CSSProperties,

    ctaTitle: {
        fontSize: '1.4rem',
        fontWeight: 800,
        color: '#ffffff',
        margin: 0,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    ctaName: {
        fontSize: '0.9rem',
        color: '#93c5fd',
        margin: 0,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    backLink: {
        display: 'inline-block',
        marginTop: '8px',
        color: '#93c5fd',
        fontSize: '0.87rem',
        textDecoration: 'none',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    // ── Buttons (kept from original) ──────────────────────
    contactLink: {
        textDecoration: 'none',
    } as CSSProperties,

    contactBtn: {
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        padding: '13px 36px',
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '50px',
        cursor: 'pointer',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 40px rgba(37, 99, 235, 0.4)',
    } as CSSProperties,

    contactBtnHover: {
        backgroundColor: '#1d4ed8',
        transform: 'translateY(-3px)',
        boxShadow: '0 15px 50px rgba(37, 99, 235, 0.55)',
    } as CSSProperties,

    // ── Legacy (kept for backward compat) ─────────────────
    headerContainer: {} as CSSProperties,
    headerTitle: {
        fontSize: '2rem',
        fontWeight: 800,
        color: '#0f172a',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,
    headerSpan: {} as CSSProperties,
    headerText: {} as CSSProperties,
}

