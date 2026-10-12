import type { CSSProperties } from 'react'

export const styles = {
    mainSection: {
        maxWidth: '100vw',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        backgroundColor: '#fff',
        position: 'relative',
        paddingBottom: '100px',
    } as CSSProperties,

    contentContainer: {
        padding: '0 30px',
        margin: '0 auto',
        maxWidth: '1200px',
        paddingTop: '130px',
        paddingBottom: '80px',
        boxSizing: 'border-box',
    } as CSSProperties,

    headerContainer: {
        textAlign: 'left',
        marginBottom: '10px',
        maxWidth: '900px',
        padding: '20px 0',
        position: 'relative',
    } as CSSProperties,

    headerTitle: {
        fontSize: '3rem',
        fontWeight: 800,
        margin: '0',
        color: '#000',
        lineHeight: 1.2,
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '-0.5px',
    } as CSSProperties,

    headerSpan: {
        background: 'linear-gradient(90deg, #007CF0, #00DFD8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundColor: 'transparent',
        position: 'relative',
        display: 'inline-block',
    } as CSSProperties,

    headerText: {
        fontSize: '1.25rem',
        color: '#333',
        lineHeight: 1.6,
        fontWeight: 400,
        marginTop: '20px',
        fontFamily: "'Inter', sans-serif",
        maxWidth: '700px',
        whiteSpace: 'pre-wrap',
    } as CSSProperties,

    contactLink: {
        textDecoration: 'none',
    } as CSSProperties,

    contactBtn: {
        marginTop: '30px',
        backgroundColor: '#2a62bc',
        color: '#fff',
        border: 'none',
        padding: '12px 32px',
        fontSize: '1rem',
        fontWeight: 700,
        borderRadius: '50px',
        cursor: 'pointer',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 40px rgba(0, 188, 216, 0.3)',
    } as CSSProperties,

    contactBtnHover: {
        backgroundColor: '#007CF0',
        transform: 'translateY(-3px)',
        boxShadow: '0 15px 50px rgba(0, 188, 216, 0.5)',
    } as CSSProperties,
}
