import { CardInfoStyle } from './CardInfoStyle';

interface EducationItem {
    id: number;
    school: string;
    degree: string;
    year: string;
    icon: string;
}

const educationData: EducationItem[] = [
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
        <div style={CardInfoStyle.wrapper}>
            {educationData.map((item: EducationItem, idx: number) => (
                <div key={item.id} style={CardInfoStyle.timelineItem}>
                    {/* Timeline column */}
                    <div style={CardInfoStyle.timelineCol}>
                        {/* Dot */}
                        <div style={CardInfoStyle.dot} />
                        {/* Line */}
                        {idx < educationData.length - 1 && (
                            <div style={CardInfoStyle.line} />
                        )}
                    </div>

                    {/* Content */}
                    <div style={{
                        ...CardInfoStyle.contentWrapper,
                        paddingBottom: idx < educationData.length - 1 ? '32px' : '0',
                    }}>
                        <div style={CardInfoStyle.card}>
                            {/* Year badge */}
                            <span style={CardInfoStyle.yearBadge}>
                                <span>{item.icon}</span>
                                {item.year}
                            </span>

                            <h3 style={CardInfoStyle.schoolTitle}>
                                {item.school}
                            </h3>
                            <p style={CardInfoStyle.degreeText}>
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