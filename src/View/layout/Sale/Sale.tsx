import { Link } from "react-router-dom"
import CardItem from "../../Components/CardItem/CardItem"
import { styles, sectionBadge, sectionTitle, sectionDivider, tokens } from "./SaleStyle"
import { useAbout } from "../../../ViewModel/useAbout"
import { useTranslation } from "react-i18next"
import { useState, useMemo } from "react"
import Fuse from "fuse.js"
import dataSearchVi from "../../../locales/vi/dataSearch.json"
import dataSearchEn from "../../../locales/en/dataSearch.json"

const SECTION_TITLES: Record<string, { vi: string; en: string }> = {
    overview: { vi: "Tổng quan dự án", en: "Project Overview" },
    developer: { vi: "Chủ đầu tư & Phát triển", en: "Developer & Development Team" },
    location: { vi: "Vị trí & Tọa độ", en: "Location & Address" },
    connectivity: { vi: "Kết nối giao thông & Hạ tầng", en: "Connectivity & Infrastructure" },
    scale: { vi: "Quy mô & Mật độ xây dựng", en: "Project Scale" },
    products: { vi: "Loại hình sản phẩm", en: "Product Types" },
    compound: { vi: "Mô hình Compound & An ninh", en: "Compound Model & Security" },
    area: { vi: "Diện tích căn hộ", en: "Apartment Sizes & Layouts" },
    tower: { vi: "Cơ cấu 12 tòa tháp", en: "12 Towers Breakdown" },
    construction: { vi: "Tiến độ xây dựng", en: "Construction Progress" },
    legal: { vi: "Pháp lý & Hợp đồng mua bán", en: "Legal Status & Contracts" },
    handover: { vi: "Tiêu chuẩn bàn giao & Nội thất", en: "Handover Standards & Fittings" },
    amenities: { vi: "Hệ thống tiện ích nội khu", en: "Amenities & Facilities" },
    price: { vi: "Giá bán tham khảo", en: "Price Reference" },
    payment: { vi: "Phương thức & Lịch thanh toán", en: "Payment Schedules" },
    banking: { vi: "Ngân hàng liên kết & Hỗ trợ vay", en: "Banking Partners & Financing" },
    rental: { vi: "Chính sách cho thuê & Khai thác", en: "Rental & Leasing Policy" },
    investment: { vi: "Tiềm năng đầu tư & Tăng giá", en: "Investment Potential" },
    salesCTA: { vi: "Liên hệ tư vấn & Nhận báo giá", en: "Consultation & Price Inquiries" },
};

const SUGGESTIONS = {
    vi: ["Vị trí", "Giá bán", "Tiến độ", "Pháp lý", "Tiện ích", "Thanh toán", "Căn 2PN", "Chủ đầu tư"],
    en: ["Location", "Price", "Progress", "Legal", "Amenities", "Payment", "2BR Unit", "Developer"],
};

interface SearchItem {
    id: string;
    title: string;
    keywords: string[];
    content: string;
}

const Sale = () => {
    const { highlightedId, btnHover, setBtnHover, } = useAbout();
    const { t, i18n } = useTranslation();

    const expertiseData = (t('salePage.expertiseData', { returnObjects: true }) as Array<any>) || [];
    const projectsData = (t('salePage.projectsData', { returnObjects: true }) as Array<any>) || [];
    const faqData = (t('salePage.faqData', { returnObjects: true }) as Array<any>) || [];
    const [query, setQuery] = useState("");

    const isVi = i18n.language?.startsWith('vi');
    const currentDataSearch = isVi ? dataSearchVi : dataSearchEn;

    // Convert thePrive object in dataSearch.json into a searchable list
    const searchableItems: SearchItem[] = useMemo(() => {
        const items: SearchItem[] = [];
        const prive = (currentDataSearch as any)?.thePrive;
        if (!prive) return items;

        Object.entries(prive).forEach(([key, val]: [string, any]) => {
            if (val && typeof val === 'object' && Array.isArray(val.keywords) && typeof val.content === 'string') {
                const titleObj = SECTION_TITLES[key];
                const title = titleObj ? (isVi ? titleObj.vi : titleObj.en) : (key.charAt(0).toUpperCase() + key.slice(1));
                items.push({
                    id: key,
                    title,
                    keywords: val.keywords,
                    content: val.content,
                });
            }
        });
        return items;
    }, [currentDataSearch, isVi]);

    // Initialize Fuse.js instance for fuzzy search
    const fuse = useMemo(() => {
        return new Fuse(searchableItems, {
            keys: [
                { name: 'keywords', weight: 0.5 },
                { name: 'title', weight: 0.3 },
                { name: 'content', weight: 0.2 },
            ],
            threshold: 0.35, // 0.0: khớp tuyệt đối, 0.35: tìm gần đúng mượt mà, chịu được gõ sai/thiếu dấu
            ignoreLocation: true, // Tìm ở bất kỳ vị trí nào trong chuỗi
            minMatchCharLength: 2,
        });
    }, [searchableItems]);

    // Search results using Fuse.js (giới hạn tối đa 4 mục phù hợp nhất)
    const results = useMemo(() => {
        const trimmed = query.trim();
        if (!trimmed) return [];
        // return fuse.search(trimmed).map((result) => result.item);
        return fuse.search(trimmed, { limit: 4 }).map((result) => result.item);
    }, [fuse, query]);

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

                    {/* Quick Search Widget */}
                    <div style={{
                        width: '100%',
                        marginTop: '24px',
                        padding: '24px',
                        borderRadius: '12px',
                        backgroundColor: tokens.paperCard,
                        border: `1px solid ${tokens.rule}`,
                        boxShadow: tokens.shadow,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        boxSizing: 'border-box',
                    }}>
                        <div>
                            <h3 style={{
                                margin: 0,
                                fontSize: 'clamp(16px, 2.2vw, 19px)',
                                fontWeight: 700,
                                color: tokens.ink,
                            }}>
                                {isVi ? 'Hỏi đáp & Tra cứu nhanh' : 'Project Q&A & Smart Search'}
                            </h3>
                        </div>

                        {/* Search Input Container */}
                        <div style={{ position: 'relative', width: '100%' }}>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={isVi ? 'Nhập câu hỏi hoặc từ khóa (vị trí, giá bán, pháp lý, tiện ích...)' : 'Ask a question or enter keywords (location, price, legal, amenities...)'}
                                style={{
                                    width: '100%',
                                    padding: '12px 42px 12px 16px',
                                    borderRadius: '8px',
                                    border: `1px solid ${tokens.rule}`,
                                    backgroundColor: tokens.paper,
                                    color: tokens.ink,
                                    fontSize: '14px',
                                    fontFamily: tokens.fontSans,
                                    outline: 'none',
                                    boxSizing: 'border-box',
                                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = tokens.accent;
                                    e.target.style.boxShadow = `0 0 0 3px ${tokens.accentLight}`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = tokens.rule;
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery('')}
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: tokens.inkMuted,
                                        fontSize: '16px',
                                        padding: '4px',
                                        lineHeight: 1,
                                    }}
                                    title={isVi ? 'Xóa tìm kiếm' : 'Clear search'}
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Suggestion Chips */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', color: tokens.inkMuted, fontWeight: 500 }}>
                                {isVi ? 'Gợi ý từ khóa:' : 'Suggestions:'}
                            </span>
                            {(isVi ? SUGGESTIONS.vi : SUGGESTIONS.en).map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setQuery(tag)}
                                    style={{
                                        border: `1px solid ${tokens.rule}`,
                                        backgroundColor: query.toLowerCase() === tag.toLowerCase() ? tokens.accent : tokens.paperSubtle,
                                        color: query.toLowerCase() === tag.toLowerCase() ? tokens.paper : tokens.inkMid,
                                        fontSize: '12px',
                                        padding: '4px 10px',
                                        borderRadius: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.15s ease',
                                        fontFamily: tokens.fontSans,
                                    }}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        {/* Search Results */}
                        {query.trim() !== '' && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
                                <div style={{ fontSize: '13px', color: tokens.inkMid, fontWeight: 600 }}>
                                    {isVi
                                        ? `Tìm thấy ${results.length} thông tin liên quan:`
                                        : `Found ${results.length} related result(s):`}
                                </div>

                                {results.length === 0 ? (
                                    <div style={{
                                        padding: '16px',
                                        borderRadius: '8px',
                                        backgroundColor: tokens.paperSubtle,
                                        color: tokens.inkMid,
                                        fontSize: '13.5px',
                                        lineHeight: 1.6,
                                    }}>
                                        {isVi
                                            ? 'Không tìm thấy thông tin phù hợp với từ khóa này. Bạn có thể thử từ khóa khác hoặc liên hệ trực tiếp để được giải đáp chi tiết.'
                                            : 'No matching information found. Try another keyword or reach out directly for full guidance.'}
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {results.map((item) => (
                                            <div
                                                key={item.id}
                                                style={{
                                                    padding: '14px 16px',
                                                    borderRadius: '8px',
                                                    border: `1px solid ${tokens.rule}`,
                                                    backgroundColor: tokens.paper,
                                                    boxShadow: tokens.shadow,
                                                }}
                                            >
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    marginBottom: '6px',
                                                }}>
                                                    <span style={{
                                                        fontSize: '11px',
                                                        fontWeight: 700,
                                                        color: tokens.accent,
                                                        backgroundColor: tokens.accentLight,
                                                        padding: '2px 8px',
                                                        borderRadius: '4px',
                                                        fontFamily: tokens.fontMono,
                                                    }}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <p style={{
                                                    margin: 0,
                                                    fontSize: '13.5px',
                                                    lineHeight: 1.6,
                                                    color: tokens.ink,
                                                    whiteSpace: 'pre-line',
                                                }}>
                                                    {item.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
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
                                        image={item.image}
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
        </section >
    )
}

export default Sale