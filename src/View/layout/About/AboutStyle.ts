import { Colors } from "../../DesignSystem/Colors"


export const sectionBadge: React.CSSProperties = {
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
    width: 'fit-content',
}

export const sectionTitle: React.CSSProperties = {
    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
    fontWeight: 700,
    color: Colors.textPrimary,
    margin: 0,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
}

export const sectionDivider: React.CSSProperties = {
    width: '48px',
    height: '3px',
    borderRadius: '4px',
    background: `linear-gradient(90deg, ${Colors.cyan}, transparent)`,
    marginTop: '12px',
    marginBottom: '32px',
}

export const styles = {
    mainSection: {
        marginTop: '80px',
        padding: '0 clamp(16px, 5vw, 80px)',
        backgroundColor: Colors.navyDark,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as React.CSSProperties,

    contentContainer: {
        width: '100%',
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        paddingBottom: '80px',
    } as React.CSSProperties,

    headerContainer: {
        padding: 'clamp(40px, 8vw, 80px) 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',
        borderBottom: `1px solid ${Colors.glassBorder}`,
        background: `radial-gradient(ellipse 60% 40% at 50% 10%, rgba(0,216,255,0.05) 0%, transparent 80%)`,
    } as React.CSSProperties,

    headerTitle: {
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        margin: 0,
        color: Colors.textPrimary,
    } as React.CSSProperties,

    headerSpan: {
        color: Colors.cyan,
        textShadow: `0 0 30px ${Colors.cyanGlow}`,
    } as React.CSSProperties,

    headerText: {
        fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
        lineHeight: 1.8,
        maxWidth: '760px',
        color: Colors.textSecondary,
        margin: '0 auto',
    } as React.CSSProperties,

    contactBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 28px',
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${Colors.cyan}, #0097b2)`,
        color: Colors.navyDark,
        fontWeight: 700,
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: `0 4px 20px ${Colors.cyanGlow}`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        textDecoration: 'none',
    } as React.CSSProperties,

    sectionWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    } as React.CSSProperties,

    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
    } as React.CSSProperties,

    gridContainer2Col: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px',
        width: '100%',
    } as React.CSSProperties,

    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
    } as React.CSSProperties,
}