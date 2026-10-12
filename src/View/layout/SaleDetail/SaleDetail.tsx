import { Link } from "react-router-dom"
import { useAbout } from "../../../ViewModel/useAbout"
import { useTranslation } from "react-i18next"
import { styles } from "./SaleDetailStyle"

export const SaleDetail = () => {
    const { btnHover, setBtnHover } = useAbout();
    const { t } = useTranslation();

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
                    <Link to="/contact" style={styles.contactLink}>
                        <button
                            style={btnHover ? { ...styles.contactBtn, ...styles.contactBtnHover } : styles.contactBtn}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                        >
                            {t('salePage.contactMe')}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
