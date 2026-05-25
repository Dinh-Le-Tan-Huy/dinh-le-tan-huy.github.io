import React, { type CSSProperties } from 'react';
import { styles } from './CardItemStyle';

interface CardItemProps {
    title: string;
    des?: string;
    time?: string;
    responsibilities: string[];
    variant?: 'default' | 'note';
    containerStyle?: CSSProperties;
    onActionClick?: () => void;
}

const CardItem = ({ title, des, time, responsibilities, variant = 'default', containerStyle, onActionClick }: CardItemProps) => {

    // --- GIAO DIỆN MỚI (DẠNG THẺ NOTE) ---
    if (variant === 'note') {
        return (
            <div style={{ ...styles.noteContainer, ...containerStyle }}>
                {/* Icon trang trí góc trên bên phải */}
                <div style={styles.noteTopRightIcon}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="rgba(0,216,255,0.08)" />
                        <rect x="9" y="10" width="14" height="16" rx="2" stroke="rgba(0,216,255,0.4)" strokeWidth="1.5" fill="none" />
                        <path d="M12 14h8M12 17h8M12 20h5" stroke="rgba(0,216,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="27" cy="9" r="5" fill="rgba(0,216,255,0.15)" stroke="rgba(0,216,255,0.5)" strokeWidth="1" />
                        <path d="M25 9l1.5 1.5L29 7" stroke="#00d8ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div style={styles.noteLeftColumn}>
                    <p style={styles.noteTitle}>{title}</p>
                    {des && <p style={styles.noteDescription}>{des}</p>}
                    {time && <p style={styles.noteTime}>{time}</p>}
                </div>

                <div style={styles.noteRightColumn}>
                    {responsibilities.map((item, index) => (
                        <div key={index} style={styles.noteResponsibilityItem}>
                            <span style={styles.noteListIcon}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="rgba(0,216,255,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <p style={styles.noteItemText}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- GIAO DIỆN card item ---
    return (
        <div style={{ ...styles.container, ...containerStyle }}>
            <div style={styles.leftColumn}>
                <p style={styles.title}>{title}</p>
                <p style={styles.description}>{des}</p>
                {time && <p style={styles.time}>{time}</p>}
                
                {onActionClick && (
                    <button 
                        onClick={onActionClick}
                        style={{
                            marginTop: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(0, 216, 255, 0.08)',
                            border: '1px solid rgba(0, 216, 255, 0.2)',
                            color: '#00d8ff',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            width: 'fit-content',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(0, 216, 255, 0.15)';
                            e.currentTarget.style.borderColor = 'rgba(0, 216, 255, 0.4)';
                            e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 216, 255, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(0, 216, 255, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(0, 216, 255, 0.2)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span>Send Detail</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                )}
            </div>

            <div style={styles.rightColumn}>
                {responsibilities.map((item, index) => (
                    <div key={index} style={styles.responsibilityItem as React.CSSProperties}>
                        <span style={styles.responsibilityDot as React.CSSProperties} />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardItem;