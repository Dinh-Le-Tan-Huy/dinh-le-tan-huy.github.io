import { type CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';

export const styles = {
    container: {
        marginBottom: '12px',
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
        padding: 'clamp(12px, 2vw, 16px) clamp(16px, 3vw, 22px)',
        borderRadius: '16px 16px 16px 4px',
        border: `1px solid ${Colors.glassBorder}`,
        backgroundColor: Colors.navyCard,
        color: Colors.textPrimary,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        fontSize: 'clamp(14px, 1.5vw, 15px)',
        fontWeight: 500,
        lineHeight: '1.5',
        textAlign: 'left',
        maxWidth: '90%',
        backdropFilter: 'blur(8px)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,

    iconWrapper: (isOpen: boolean): CSSProperties => ({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '22px',
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        border: `1.5px solid ${isOpen ? Colors.cyan : Colors.textMuted}`,
        color: isOpen ? Colors.cyan : Colors.textMuted,
        fontSize: '18px',
        lineHeight: 1,
        flexShrink: 0,
        transition: 'transform 0.3s ease, border-color 0.3s ease, color 0.3s ease',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
    }),

    answerWrapper: (isOpen: boolean): CSSProperties => ({
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: isOpen ? '10px' : '0px',
        maxHeight: isOpen ? '500px' : '0px',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        width: '100%',
        transition: 'max-height 0.4s ease, opacity 0.3s ease, margin-top 0.3s ease',
    }),

    answerBubble: {
        padding: '16px 22px',
        background: `linear-gradient(135deg, #0f2149, #162255)`,
        border: `1px solid rgba(0,216,255,0.12)`,
        color: Colors.textSecondary,
        borderRadius: '16px 16px 4px 16px',
        maxWidth: '85%',
        fontSize: 'clamp(13px, 1.4vw, 14px)',
        lineHeight: '1.7',
        fontWeight: 400,
        fontFamily: "'Inter', sans-serif",
    } as CSSProperties,
};
