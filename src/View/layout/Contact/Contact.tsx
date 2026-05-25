import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import { ContactStyle } from './ContactStyle';
import { useContact } from '../../../ViewModel/useContact';

const SocialLink = ({ label, href }: { label: string; href: string }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...ContactStyle.socialLink,
                color: isHover ? "#ffffff" : "#94a3b8",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {label}
        </a>
    );
};

const EmailLink = ({ email }: { email: string }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <a
            href={`mailto:${email}`}
            style={{
                ...ContactStyle.infoValue,
                color: isHover ? "#60a5fa" : "#f1f5f9", // Soft light blue on hover for professional feel
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {email}
        </a>
    );
};

const Contact = () => {
    const {
        email, name, message, isLoading, submitted, isFormValid, errors,
        handleChangeField, handleSend
    } = useContact();

    const [searchParams] = useSearchParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    useEffect(() => {
        const project = searchParams.get('project');
        if (project) {
            handleChangeField('message', `Hi Huy, I'm reaching out to discuss your project: "${project}".`);
        }
    }, [searchParams]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <div style={{
            ...ContactStyle.container,
            flexDirection: isMobile ? "column" : "row",
            marginTop: isMobile ? "80px" : "140px",
            minHeight: isMobile ? "auto" : "600px",
            borderRadius: isMobile ? "16px" : "24px",
        }}>
            {/* Left Panel: Contact Information & Professional Greeting */}
            <div style={{
                ...ContactStyle.leftPanel,
                width: isMobile ? "100%" : "40%",
                padding: isMobile ? "32px 24px" : "48px 40px",
            }}>
                <div style={ContactStyle.leftTop}>
                    <h2 style={ContactStyle.heading}>Let's Connect</h2>
                    <p style={ContactStyle.subheading}>
                        I am always open to discussing new projects, collaboration opportunities, or general inquiries. Feel free to fill out the form or reach out directly.
                    </p>

                    <div style={ContactStyle.infoList}>
                        <div style={ContactStyle.infoItem}>
                            <h3 style={ContactStyle.infoLabel}>Email</h3>
                            <EmailLink email="t.huy030826@gmail.com" />
                        </div>
                        <div style={ContactStyle.infoItem}>
                            <h3 style={ContactStyle.infoLabel}>Location</h3>
                            <span style={ContactStyle.infoValue}>Ho Chi Minh City, Vietnam</span>
                        </div>
                    </div>
                </div>

                <div style={ContactStyle.socialLinks}>
                    <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/tan-huy-673408342/" />
                    <SocialLink label="GitHub" href="https://github.com" />
                    <SocialLink label="Resume" href="#" />
                </div>
            </div>

            {/* Right Panel: Contact Form */}
            <div style={{
                ...ContactStyle.rightPanel,
                padding: isMobile ? "32px 24px" : "48px 60px",
            }}>
                <Input
                    title="Name*"
                    placeholder="e.g. Jane Smith"
                    titleStyle={ContactStyle.inputTitle}
                    value={name}
                    onChangeText={(val) => handleChangeField("name", val)}
                    errorMessage={submitted ? errors.name : undefined}
                />

                <Input
                    title="Email*"
                    placeholder="e.g. jane.smith@example.com"
                    titleStyle={ContactStyle.inputTitle}
                    value={email}
                    onChangeText={(val) => handleChangeField("email", val)}
                    errorMessage={submitted ? errors.email : undefined}
                />

                <Input
                    title="Message"
                    placeholder="Tell me about your project requirements, goals, or questions..."
                    statusCountText={true}
                    maxLength={200}
                    multiline={true}
                    titleStyle={ContactStyle.inputTitle}
                    value={message}
                    onChangeText={(val) => handleChangeField("message", val)}
                    errorMessage={submitted ? errors.message : undefined}
                />

                <button
                    onClick={handleSend}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    style={{
                        ...ContactStyle.buttonBase,
                        background: isFormValid
                            ? (isLoading ? "var(--accent)" : "var(--accent)")
                            : "var(--border)",
                        color: isFormValid ? "#ffffff" : "var(--text)",
                        cursor: isLoading ? "wait" : (isFormValid ? "pointer" : "not-allowed"),
                        opacity: isLoading ? 0.7 : (isFormValid ? (isButtonHovered ? 0.9 : 1) : 0.6),
                        transform: isButtonHovered && isFormValid && !isLoading ? "translateY(-1px)" : "none",
                        boxShadow: isButtonHovered && isFormValid && !isLoading ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                    }}
                    disabled={!isFormValid || isLoading}
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </div>
        </div>
    );
};

export default Contact;