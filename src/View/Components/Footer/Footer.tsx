import { styles } from "./FooterStyle";


const links = [
    { label: 'Email', href: 'mailto:[EMAIL_ADDRESS]' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tan-huy-673408342/' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://www.facebook.com/HuyLe0326/' },
];

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.topRow}>
                <h2 style={styles.name}>Huy Lê Developer</h2>
                <div style={styles.linkList}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={styles.link}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <hr style={styles.divider} />
            <div style={styles.bottomRow}>
                <p style={styles.copyright}>© All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;