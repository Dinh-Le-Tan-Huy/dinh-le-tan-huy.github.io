import { Colors } from '../../DesignSystem/Colors';

const educationData = [
    {
        id: 1,
        school: "University of Information Technology – UIT",
        degree: "Bachelor of Science in Computer Science",
        year: "2025",
        icon: "🎓",
    },
    {
        id: 2,
        school: "Ly Tu Trong College – LTTC",
        degree: "Associate of Science in Information Technology",
        year: "2021 – 2024",
        icon: "💻",
    },
    {
        id: 3,
        school: "Ly Tu Trong College – LTTC",
        degree: "Intermediate Certificate in Cybersecurity",
        year: "2018 – 2021",
        icon: "🔒",
    },
];

const EducationTimeline = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
            {educationData.map((item, idx) => (
                <div key={item.id} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
                    {/* Timeline column */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32px', flexShrink: 0 }}>
                        {/* Dot */}
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: Colors.cyan,
                            boxShadow: `0 0 10px ${Colors.cyanGlow}`,
                            marginTop: '18px',
                            flexShrink: 0,
                            zIndex: 1,
                        }} />
                        {/* Line */}
                        {idx < educationData.length - 1 && (
                            <div style={{
                                width: '1px',
                                flex: 1,
                                background: `linear-gradient(to bottom, ${Colors.cyanBorder}, transparent)`,
                                marginTop: '6px',
                            }} />
                        )}
                    </div>

                    {/* Content */}
                    <div style={{
                        flex: 1,
                        paddingBottom: idx < educationData.length - 1 ? '32px' : '0',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            padding: '14px 18px',
                            borderRadius: '12px',
                            background: Colors.glassSurface,
                            border: `1px solid ${Colors.glassBorder}`,
                            transition: 'border-color 0.3s ease',
                        }}>
                            {/* Year badge */}
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '3px 10px',
                                backgroundColor: Colors.cyanDim,
                                border: `1px solid ${Colors.cyanBorder}`,
                                borderRadius: '99px',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: Colors.cyan,
                                letterSpacing: '0.06em',
                                width: 'fit-content',
                                marginBottom: '4px',
                            }}>
                                <span>{item.icon}</span>
                                {item.year}
                            </span>

                            <h3 style={{
                                fontSize: 'clamp(14px, 1.8vw, 16px)',
                                fontWeight: 700,
                                margin: 0,
                                color: Colors.textPrimary,
                                fontFamily: "'Inter', sans-serif",
                            }}>
                                {item.school}
                            </h3>
                            <p style={{
                                color: Colors.textSecondary,
                                margin: 0,
                                fontSize: '13px',
                                fontFamily: "'Inter', sans-serif",
                                lineHeight: 1.5,
                            }}>
                                {item.degree}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EducationTimeline;