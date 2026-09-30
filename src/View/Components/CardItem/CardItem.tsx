import { type CSSProperties, useState, useEffect, useCallback } from 'react';
import { styles } from './CardItemStyle';

interface CardItemProps {
    title: string;
    des?: string;
    time?: string;
    responsibilities?: string[];
    variant?: 'default' | 'note';
    containerStyle?: CSSProperties;
    onActionClick?: () => void;
    centerContent?: boolean;
    image?: string;
    imageUrl?: string;
    imageAlt?: string;
    imageStyle?: CSSProperties;
    imageContainerStyle?: CSSProperties;
}

// ── Lightbox overlay component ──────────────────────────────────────────────
const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        // Prevent background scroll
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.82)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                animation: 'carditem-lb-in 0.18s ease',
                cursor: 'zoom-out',
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                aria-label="Close"
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '20px',
                    lineHeight: 1,
                    transition: 'background 0.15s ease',
                    zIndex: 10000,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            >
                ✕
            </button>

            {/* Image — stop propagation so clicking image doesn't close */}
            <img
                src={src}
                alt={alt}
                onClick={e => e.stopPropagation()}
                style={{
                    maxWidth: '90vw',
                    maxHeight: '88vh',
                    width: 'auto',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                    animation: 'carditem-img-in 0.22s cubic-bezier(0.34,1.56,0.64,1)',
                    cursor: 'default',
                    objectFit: 'contain',
                    userSelect: 'none',
                }}
            />

            <style>{`
                @keyframes carditem-lb-in {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes carditem-img-in {
                    from { transform: scale(0.82); opacity: 0; }
                    to   { transform: scale(1);    opacity: 1; }
                }
            `}</style>
        </div>
    );
};

// ── Clickable image thumbnail ────────────────────────────────────────────────
const ZoomableImage = ({
    src,
    alt,
    imgStyle,
    wrapperStyle,
}: {
    src: string;
    alt: string;
    imgStyle?: CSSProperties;
    wrapperStyle?: CSSProperties;
}) => {
    const [open, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);

    return (
        <>
            <div
                style={{ ...wrapperStyle, cursor: 'zoom-in', position: 'relative' }}
                onClick={() => setOpen(true)}
                title="Click để phóng to"
            >
                <img
                    src={src}
                    alt={alt}
                    style={imgStyle}
                    loading="lazy"
                />
                {/* Zoom hint icon */}
                <span style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.45)',
                    borderRadius: '6px',
                    padding: '3px 5px',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    opacity: 0.9,
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </span>
            </div>

            {open && <Lightbox src={src} alt={alt} onClose={close} />}
        </>
    );
};

// ── Main CardItem component ──────────────────────────────────────────────────
const CardItem = ({
    title,
    des,
    time,
    responsibilities,
    variant = 'default',
    containerStyle,
    onActionClick,
    centerContent,
    image,
    imageUrl,
    imageAlt,
    imageStyle,
    imageContainerStyle,
}: CardItemProps) => {
    const displayImage = image || imageUrl;

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
                    {displayImage && (
                        <ZoomableImage
                            src={displayImage}
                            alt={imageAlt || title}
                            wrapperStyle={{ ...styles.noteImageWrapper, ...imageContainerStyle }}
                            imgStyle={{ ...styles.noteImage, ...imageStyle }}
                        />
                    )}
                </div>

                {responsibilities && responsibilities.length > 0 && (
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
                )}
            </div>
        );
    }

    // --- GIAO DIỆN card item ---
    return (
        <div style={{ ...styles.container, ...containerStyle }}>
            <div style={{
                ...styles.leftColumn,
                ...(centerContent ? { alignItems: 'center', textAlign: 'center', flex: 1 } : {})
            }}>
                <p style={styles.title}>{title}</p>
                <p style={styles.description}>{des}</p>
                {time && <p style={styles.time}>{time}</p>}

                {displayImage && (
                    <ZoomableImage
                        src={displayImage}
                        alt={imageAlt || title}
                        wrapperStyle={{ ...styles.imageWrapper, ...imageContainerStyle }}
                        imgStyle={{ ...styles.image, ...imageStyle }}
                    />
                )}

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

            {responsibilities && responsibilities.length > 0 && (
                <div style={styles.rightColumn}>
                    {responsibilities.map((item, index) => (
                        <div key={index} style={styles.responsibilityItem as CSSProperties}>
                            <span style={styles.responsibilityDot as CSSProperties} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardItem;