import { Link } from "react-router-dom"
import CardInfo from "../../Components/CardInfo/CardInfo"
import CardItem from "../../Components/CardItem/CardItem"
import { styles, sectionBadge, sectionTitle, sectionDivider, tokens } from "./AboutStyle"
import { useAbout } from "../../../ViewModel/useAbout"
import ChatBubbleItem from "../../Components/ChatBubbleItem/ChatBubbleItem"
import { useTranslation } from "react-i18next"

const About = () => {
    const { highlightedId, btnHover, setBtnHover, opentIndex, setOpentIndex } = useAbout();
    const { t } = useTranslation()

    const skillsData = t('aboutPage.skillsData', { returnObjects: true }) as any[];
    const projectsData = t('aboutPage.projectsData', { returnObjects: true }) as any[];
    const educationData = t('aboutPage.educationData', { returnObjects: true }) as any[];
    const awardsData = t('aboutPage.awardsData', { returnObjects: true }) as any[];
    const clientFAQs = t('aboutPage.clientFAQs', { returnObjects: true }) as any[];

    return (
        <section id="about" style={styles.mainSection}>
            <div style={styles.contentContainer}>

                {/* Hero Header */}
                <div style={styles.headerContainer}>
                    <h1 style={styles.headerTitle}>
                        {t('aboutPage.greeting')}<span style={styles.headerSpan}>{t('aboutPage.nameIntro')}</span>
                    </h1>
                    <p style={styles.headerText}>
                        {t('aboutPage.introText')}
                    </p>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <button
                            style={{
                                ...styles.contactBtn,
                                transform: btnHover ? 'translateY(-1px)' : 'none',
                                backgroundColor: btnHover ? tokens.inkMid : tokens.ink,
                            }}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                        >
                            {t('aboutPage.contactMe')}
                        </button>
                    </Link>
                </div>

                {/* Education section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.education')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.academicBackground')}</h2>
                    <hr style={sectionDivider} />
                    <div style={{ width: '100%' }}>
                        <CardInfo />
                    </div>
                </div>

                {/* Skills section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.skills')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.technicalSkills')}</h2>
                    <hr style={sectionDivider} />

                    <div style={styles.gridContainer}>
                        {skillsData.map((item: any) => (
                            <CardItem
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                responsibilities={item.responsibilities}
                                variant="note"
                                containerStyle={{}}
                            />
                        ))}
                    </div>
                </div>

                {/* Experience section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.experience')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.professionalHistory')}</h2>
                    <hr style={sectionDivider} />

                    <div style={styles.listContainer}>
                        {projectsData.map((item: any) => {
                            const trimmedTitle = item.title.trim();
                            const isSelected = highlightedId === trimmedTitle;
                            return (
                                <div
                                    key={item.id}
                                    id={trimmedTitle}
                                    style={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        transition: 'all 0.3s ease',
                                        border: isSelected ? `1px solid ${tokens.accent}` : '1px solid transparent',
                                        boxShadow: isSelected ? tokens.shadow : 'none',
                                    }}
                                >
                                    <CardItem
                                        title={item.title}
                                        des={item.des}
                                        responsibilities={item.responsibilities}
                                        time={item.time}
                                        containerStyle={{}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Certificates & Specialized Courses, Languages */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.certificates')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.coursesAndLanguages')}</h2>
                    <hr style={sectionDivider} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
                        {educationData.map((item: any, idx: number) => (
                            <div key={item.id} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
                                {/* Timeline column */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32px', flexShrink: 0 }}>
                                    {/* Dot */}
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: tokens.accent,
                                        border: `2px solid ${tokens.accentMid}`,
                                        marginTop: '20px',
                                        flexShrink: 0,
                                        zIndex: 1,
                                    }} />
                                    {/* Line */}
                                    {idx < educationData.length - 1 && (
                                        <div style={{
                                            width: '1px',
                                            flex: 1,
                                            backgroundColor: tokens.rule,
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
                                        borderRadius: '8px',
                                        backgroundColor: tokens.paperCard,
                                        border: `1px solid ${tokens.rule}`,
                                        boxShadow: tokens.shadow,
                                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                    }}>
                                        {/* Badge */}
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '2px 8px',
                                            backgroundColor: tokens.accentLight,
                                            border: `1px solid ${tokens.accentMid}`,
                                            borderRadius: '4px',
                                            fontSize: '11px',
                                            fontWeight: 700,
                                            color: tokens.accent,
                                            letterSpacing: '0.06em',
                                            width: 'fit-content',
                                            marginBottom: '4px',
                                            fontFamily: tokens.fontMono,
                                        }}>
                                            <span>{item.id === "edu_lang_02" ? "🌐" : "📜"}</span>
                                            {item.des}
                                        </span>

                                        <h3 style={{
                                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                                            fontWeight: 700,
                                            margin: 0,
                                            color: tokens.ink,
                                            fontFamily: tokens.fontSans,
                                        }}>
                                            {item.title}
                                        </h3>

                                        <ul style={{
                                            margin: '6px 0 0 0',
                                            paddingLeft: '20px',
                                            color: tokens.inkMid,
                                            fontSize: '13px',
                                            lineHeight: 1.6,
                                            fontFamily: tokens.fontSans,
                                        }}>
                                            {item.responsibilities.map((resp: any, rIdx: number) => (
                                                <li key={rIdx} style={{ marginBottom: '4px' }}>
                                                    {typeof resp === 'object' && resp.link ? (
                                                        <a
                                                            href={resp.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                color: tokens.accent,
                                                                textDecoration: 'none',
                                                                borderBottom: `1px dashed ${tokens.accentMid}`,
                                                                transition: 'color 0.2s ease, border-color 0.2s ease',
                                                            }}
                                                            onMouseEnter={e => {
                                                                (e.currentTarget as HTMLAnchorElement).style.color = tokens.ink;
                                                                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = tokens.ink;
                                                            }}
                                                            onMouseLeave={e => {
                                                                (e.currentTarget as HTMLAnchorElement).style.color = tokens.accent;
                                                                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = tokens.accentMid;
                                                            }}
                                                        >
                                                            {resp.text}
                                                        </a>
                                                    ) : resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.awards')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.honorsAndRecognition')}</h2>
                    <hr style={sectionDivider} />

                    <div style={styles.gridContainer2Col}>
                        {awardsData.map((item: any) => (
                            <CardItem
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                responsibilities={item.responsibilities}
                                variant="note"
                                containerStyle={{}}
                            />
                        ))}
                    </div>
                </div>
                <div id="FAQ" style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('aboutPage.badges.faq')}
                    </div>
                    <h2 style={sectionTitle}>{t('aboutPage.titles.frequentlyAskedQuestions')}</h2>
                    <hr style={sectionDivider} />

                    <div style={styles.faqContainer}>
                        {clientFAQs.map((faq: any, index: number) => (
                            <ChatBubbleItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={opentIndex === index}
                                onToggle={() => setOpentIndex(opentIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About