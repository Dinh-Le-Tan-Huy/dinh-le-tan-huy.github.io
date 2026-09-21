import { Link } from "react-router-dom"
import CardItem from "../../Components/CardItem/CardItem"
import { styles, sectionBadge, sectionTitle, sectionDivider, tokens } from "./SaleStyly"
import { useAbout } from "../../../ViewModel/useAbout"
import { useTranslation } from "react-i18next"

const Sale = () => {
    const { highlightedId, btnHover, setBtnHover, } = useAbout();
    const { t } = useTranslation()

    const expertiseData = t('salePage.expertiseData', { returnObjects: true }) as Array<any>;
    const projectsData = t('salePage.projectsData', { returnObjects: true }) as Array<any>;
    const faqData = t('salePage.faqData', { returnObjects: true }) as Array<any>;

    return (
        <section id="about" style={styles.mainSection}>
            <div style={styles.contentContainer}>

                {/* Hero Header */}
                <div style={styles.headerContainer}>
                    <h1 style={styles.headerTitle}>
                        {t('salePage.greeting')}<span style={styles.headerSpan}>{t('salePage.nameIntro')}</span>
                    </h1>
                    <p style={styles.headerText}>
                        {t('salePage.introText')}
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
                            {t('salePage.contactMe')}
                        </button>
                    </Link>
                </div>

                {/* Expertise section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('salePage.badges.expertise')}
                    </div>
                    <h2 style={sectionTitle}>{t('salePage.titles.expertise')}</h2>
                    <hr style={sectionDivider} />

                    <div style={styles.gridContainer}>
                        {expertiseData.map((item: any) => (
                            <CardItem
                                key={item.id}
                                title={item.title}
                                des={item.des}
                                responsibilities={item.highlights}
                                variant="note"
                                containerStyle={{}}
                            />
                        ))}
                    </div>
                </div>

                {/* Projects section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('salePage.badges.projects')}
                    </div>
                    <h2 style={sectionTitle}>{t('salePage.titles.projects')}</h2>
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
                                        des={item.subtitle}
                                        responsibilities={item.highlights}
                                        containerStyle={{}}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* FAQ section */}
                <div style={styles.sectionWrapper}>
                    <div style={sectionBadge}>
                        {t('salePage.badges.faq')}
                    </div>
                    <h2 style={sectionTitle}>{t('salePage.titles.faq')}</h2>
                    <hr style={sectionDivider} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', width: '100%' }}>
                        {faqData.map((item: any, idx: number) => (
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
                                    {idx < faqData.length - 1 && (
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
                                    paddingBottom: idx < faqData.length - 1 ? '32px' : '0',
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
                                            <span>{item.category === 'LEGAL' ? '📋' : item.category === 'INVESTMENT' ? '💰' : item.category === 'PRICE' ? '📊' : '❓'}</span>
                                            {item.category}
                                        </span>

                                        <h3 style={{
                                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                                            fontWeight: 700,
                                            margin: 0,
                                            color: tokens.ink,
                                            fontFamily: tokens.fontSans,
                                        }}>
                                            {item.question}
                                        </h3>

                                        <p style={{
                                            margin: '6px 0 0 0',
                                            color: tokens.inkMid,
                                            fontSize: '13px',
                                            lineHeight: 1.6,
                                            fontFamily: tokens.fontSans,
                                        }}>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale