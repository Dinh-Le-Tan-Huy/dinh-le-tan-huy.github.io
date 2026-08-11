/* Hallmark · redesign · macrostructure: Long Document / Workbench
 * theme: custom "Refined Slate" · genre: modern-minimal · tone: utilitarian · technical-austere
 * contrast: pass · mobile: verified 375px+ · italic headers: none
 */

import { Typewriter } from 'react-simple-typewriter'
import ChatBubbleItem from '../../Components/ChatBubbleItem/ChatBubbleItem'
import { styles, sectionBadge, sectionTitle, sectionDivider, tokens } from './HomeStyle'
import { useState, useEffect } from 'react'
import CardItem from '../../Components/CardItem/CardItem'
import CardInfo from '../../Components/CardInfo/CardInfo'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// ── Micro-animation CSS (injected once) ──────────────────────────────────────
const ANIMATION_CSS = `
@keyframes hm-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hm-fade-up   { animation: hm-fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both; }
.hm-delay-1   { animation-delay: 0.08s; }
.hm-delay-2   { animation-delay: 0.16s; }
.hm-delay-3   { animation-delay: 0.24s; }
.hm-delay-4   { animation-delay: 0.32s; }

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
`

const TECH_STACK = [
    'React Native', 'Next.js', 'Node.js', 'TypeScript',
    'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions',
]

export const Home = () => {
    const { t } = useTranslation()
    const hrFAQs = t('homePage.hrFAQs', { returnObjects: true }) as any[]
    const projectsData = t('aboutPage.projectsData', { returnObjects: true }) as any[]
    const skillsData = t('homePage.skillsData', { returnObjects: true }) as any[]
    const typewriterWords = t('homePage.typewriter', { returnObjects: true }) as string[]

    const [opentIndex, setOpentIndex] = useState<number | null>(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
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

                {/* Available badge */}
                <div className="hm-fade-up" style={styles.greetingTag}>
                    <span style={styles.greetingDot} />
                    {t('homePage.statusBadge')}
                </div>

                {/* h1 — name + typewriter role */}
                <h1 className="hm-fade-up hm-delay-1" style={styles.greetingTitle}>
                    {t('homePage.greeting1')}
                    <span style={{ color: tokens.accent }}>Huy</span>
                    {t('homePage.greeting2')}<br />
                    {t('homePage.greeting3')}
                    <span style={styles.highlightText}>
                        <Typewriter
                            words={typewriterWords}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1800}
                        />
                    </span>
                </h1>

                {/* Tech-stack tagline — mono, restrained */}
                <div className="hm-fade-up hm-delay-2" style={styles.heroTagline}>
                    <span>Full-stack Mobile &amp; Web</span>
                    <span style={styles.heroTaglineSeparator}>·</span>
                    <span>JS / TS ecosystem</span>
                    <span style={styles.heroTaglineSeparator}>·</span>
                    <span>React Native · Next.js · Node.js</span>
                    <span style={styles.heroTaglineSeparator}>·</span>
                    <span>DB / CI-CD</span>
                </div>

                {/* Summary */}
                <p className="hm-fade-up hm-delay-2" style={styles.summaryDescription}>
                    {t('homePage.summary')}
                </p>

                {/* Tech tag row */}
                <div className="hm-fade-up hm-delay-3" style={styles.techStackRow}>
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
                        {t('homePage.askMe')}
                    </a>

                    <span style={styles.heroLocation}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                                stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {t('homePage.location')}
                    </span>
                </div>
            </div>

            {/* ════════════════════ EDUCATION ════════════════════ */}
            <div style={styles.educationSection}>

                <div style={sectionBadge} role="note">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                    </svg>
                    {t('homePage.badges.education')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.academicBackground')}</h2>
                <hr style={sectionDivider} />
                <CardInfo />

            </div>

            {/* ════════════════════ TECHNICAL SKILLS ════════════════════ */}
            <div style={styles.skillsSection}>

                <div style={sectionBadge} role="note">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
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
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.54 15.96.5 13.5.5c-1.3 0-2.41.53-3.25 1.35L9 3.08 7.75 1.85C6.91.53 5.8 0 4.5 0 2.04 0 0 2.04 0 4.5c0 .46.11.9.18 1.34H0v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM13.5 2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H10l1.22-1.22c.42-.42.99-.66 1.58-.66l.7-.12zM2 4.5C2 3.67 2.67 3 3.5 3c.58 0 1.1.23 1.5.62L6.22 4.9 6.5 5H5l-.08-.01C3.9 4.94 2 4.18 2 4.5z" />
                    </svg>
                    {t('homePage.badges.work')}
                </div>
                <h2 style={sectionTitle}>{t('homePage.titles.experience')}</h2>
                <p style={{
                    ...styles.summaryDescription,
                    marginTop: '12px',
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
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
                    </svg>
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
