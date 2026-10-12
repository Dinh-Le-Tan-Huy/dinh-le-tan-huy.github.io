import { Typewriter } from 'react-simple-typewriter'
import ChatBubbleItem from '../../Components/ChatBubbleItem/ChatBubbleItem'
import { styles, sectionBadge, sectionTitle, sectionDivider, tokens } from './HomeStyle'
import { useState, useEffect } from 'react'
import CardItem from '../../Components/CardItem/CardItem'
import CardInfo from '../../Components/CardInfo/CardInfo'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ANIMATION_CSS = `
@keyframes hm-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes hm-hero-switch {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hm-fade-up   { animation: hm-fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both; }
.hm-delay-1   { animation-delay: 0.08s; }
.hm-delay-2   { animation-delay: 0.16s; }
.hm-delay-3   { animation-delay: 0.24s; }
.hm-delay-4   { animation-delay: 0.32s; }
.hm-hero-content { animation: hm-hero-switch 0.35s cubic-bezier(0.22,1,0.36,1) both; }

.hm-skill-tag:hover {
  border-color: ${tokens.accentMid} !important;
  color: ${tokens.accent} !important;
}
.hm-btn-primary:hover {
  background-color: oklch(28% 0.02 260) !important;
}
.hm-btn-primary:active {
  transform: translateY(1px);
}
.hm-card-hover:hover {
  box-shadow: 0 4px 20px oklch(0% 0 0 / 0.09) !important;
  transform: translateY(-2px);
}
.hm-mode-pill {
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.hm-mode-pill:hover {
  border-color: ${tokens.accentMid} !important;
}
`

const TECH_STACK = [
    'React Native', 'Next.js', 'Node.js', 'TypeScript',
    'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'AI/ LLM'
]

// [DISABLED: Real Estate mode]
// const REAL_ESTATE_TAGS = [
//     "Real Estate Buying & Selling",
//     "Profitable Investment",
//     "Secure Legal Status",
//     "Rental Management",
//     "Market Analysis",
//     "Property Consignment"
// ]

export const Home = () => {
    const { t } = useTranslation()
    const hrFAQs = t('homePage.hrFAQs', { returnObjects: true }) as any[]
    const projectsData = t('aboutPage.projectsData', { returnObjects: true }) as any[]
    const skillsData = t('homePage.skillsData', { returnObjects: true }) as any[]
    const typewriterWords = t('homePage.typewriter', { returnObjects: true }) as string[]
    // const saleTypewriterWords = t('salePage.typewriter', { returnObjects: true }) as string[] // [DISABLED: Real Estate mode]

    const [opentIndex, setOpentIndex] = useState<number | null>(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const heroMode = 'it' as const // [DISABLED: Real Estate mode — was useState<'it' | 'sale'>('sale')]
    const navigate = useNavigate()

    useEffect(() => {
        // Inject micro-animation CSS once
        const id = 'hallmark-home-anim'
        if (!document.getElementById(id)) {
            const el = document.createElement('style')
            el.id = id
            el.textContent = ANIMATION_CSS
            document.head.appendChild(el)
        }
        return () => {
            // Leave the style in place — removing on unmount causes flicker on re-mount
        }
    }, [])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowWidth < 768

    return (
        <div style={styles.mainContainer}>
            {/* ════════════════════ HERO ════════════════════ */}
            <div style={styles.summaryContainer}>

                {/* [DISABLED: Real Estate mode toggle — uncomment to re-enable]
                <div className="hm-fade-up" style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '32px',
                    padding: '4px',
                    backgroundColor: tokens.paperSubtle,
                    borderRadius: '8px',
                    border: `1px solid ${tokens.rule}`,
                    width: '100%',
                    minWidth: '320px',
                }}>
                    <button id="hero-toggle-it" className="hm-mode-pill" onClick={() => setHeroMode('it')} ...>IT / Dev</button>
                    <button id="hero-toggle-sale" className="hm-mode-pill" onClick={() => setHeroMode('sale')} ...>Real Estate</button>
                </div>
                */}

                {/* Hero content — re-mounts on mode switch to trigger animation */}
                <div key={heroMode} className="hm-hero-content" style={{ width: '100%' }}>

                    {/* Available badge */}
                    <div className="hm-fade-up" style={styles.greetingTag}>
                        <span style={styles.greetingDot} />
                        {t('homePage.statusBadge')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.statusBadge')] */}
                    </div>

                    {/* h1 — name + typewriter role */}
                    <h1 className="hm-fade-up hm-delay-1" style={styles.greetingTitle}>
                        {t('homePage.greeting1')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.greeting1')] */}
                        <span style={{ color: tokens.accent }}>Huy</span>
                        {t('homePage.greeting2')}<br /> {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.greeting2')] */}
                        {t('homePage.greeting3')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.greeting3')] */}
                        <span style={styles.highlightText}>
                            <Typewriter
                                key={heroMode}
                                words={typewriterWords /* [DISABLED: was heroMode === 'it' ? typewriterWords : saleTypewriterWords] */}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={40}
                                delaySpeed={1800}
                            />
                        </span>
                    </h1>

                    {/* Tagline */}
                    <div className="hm-fade-up hm-delay-2" style={styles.heroTagline}>
                        {/* [DISABLED: Real Estate tagline branch removed] */}
                        <>
                            <span>Full-stack Mobile &amp; Web</span>
                            <span style={styles.heroTaglineSeparator}>·</span>
                            <span>JS / TS ecosystem</span>
                            <span style={styles.heroTaglineSeparator}>·</span>
                            <span>React Native · Next.js · Node.js</span>
                            <span style={styles.heroTaglineSeparator}>·</span>
                            <span>DB / CI-CD</span>
                        </>
                    </div>

                    {/* Summary */}
                    <p className="hm-fade-up hm-delay-2" style={styles.summaryDescription}>
                        {t('homePage.summary')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.summary')] */}
                    </p>

                    {/* Tag row */}
                    <div className="hm-fade-up hm-delay-3" style={styles.techStackRow}>
                        {/* [DISABLED: was heroMode === 'it' ? TECH_STACK : REAL_ESTATE_TAGS] */}
                        {TECH_STACK.map((tag) => (
                            <span key={tag} style={styles.techTag}>{tag}</span>
                        ))}
                    </div>

                    {/* CTA row */}
                    <div className="hm-fade-up hm-delay-4" style={styles.heroCtas}>
                        <a
                            href="#FAQ"
                            className="hm-btn-primary"
                            style={styles.heroBtnPrimary}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('FAQ')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            {t('homePage.askMe')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.askMe')] */}
                        </a>

                        <span style={styles.heroLocation}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                                    stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            {t('homePage.location')} {/* [DISABLED: was heroMode === 'it' ? ... : t('salePage.location')] */}
                        </span>
                    </div>

                </div>
            </div>

            {/* ════════════════════ EDUCATION ════════════════════ */}
            <div style={styles.educationSection}>

                <div style={sectionBadge} role="note">
                    {t('homePage.badges.education')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.academicBackground')}</h2>
                <hr style={sectionDivider} />
                <CardInfo />

            </div>

            {/* ════════════════════ TECHNICAL SKILLS ════════════════════ */}
            <div style={styles.skillsSection}>

                <div style={sectionBadge} role="note">
                    {t('homePage.badges.skills')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.technicalSkills')}</h2>
                <hr style={sectionDivider} />

                {/* Tag-cloud skill layout */}
                <div style={styles.skillsGrid}>
                    {skillsData.map((skill: any) => (
                        <div
                            key={skill.id}
                            style={isMobile ? styles.skillRowMobile : styles.skillRow}
                        >
                            <span style={styles.skillLabel}>{skill.title}</span>
                            <div style={styles.skillTagRow}>
                                {(skill.responsibilities as string[]).map((item, i) => (
                                    <span
                                        key={i}
                                        className="hm-skill-tag"
                                        style={styles.skillTag}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* ════════════════════ EXPERIENCE ════════════════════ */}
            <div style={styles.experiencesSection}>

                <div style={sectionBadge} role="note">
                    {t('homePage.badges.work')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.experience')}</h2>
                <p style={{
                    ...styles.summaryDescription,
                    marginTop: '4px',
                    marginBottom: 0,
                    maxWidth: '1080px',
                }}>
                    {t('homePage.titles.desc_experience')}
                </p>
                <hr style={sectionDivider} />

                <div style={styles.experiencesInner}>
                    {projectsData.map((item) => (
                        <div
                            key={item.id}
                            className="hm-card-hover"
                            style={{ transition: 'box-shadow 0.2s ease, transform 0.2s ease' }}
                        >
                            <CardItem
                                title={item.title}
                                des={item.des}
                                time={item.time}
                                centerContent={true}
                                onActionClick={() => navigate(`/About?project=${encodeURIComponent(item.title.trim())}`)}
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* ════════════════════ FAQs ════════════════════ */}
            <div id="FAQ" style={styles.faqSection}>

                <div style={sectionBadge} role="note">
                    {t('homePage.badges.faqs')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.frequentlyAsked')}</h2>
                <hr style={sectionDivider} />

                <div style={styles.faqContainer}>
                    {hrFAQs.map((faq: any, index: number) => (
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
    )
}
