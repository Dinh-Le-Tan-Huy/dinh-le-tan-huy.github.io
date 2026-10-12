import { Link, useNavigate } from "react-router-dom"
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
    delivery_standard: { vi: "Tiêu chuẩn bàn giao", en: "Delivery Standards" },
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
    vi: ["Vị trí", "Giá bán", "Tiến độ", "Pháp lý", "Tiện ích", "Tiêu chuẩn bàn giao", "Thanh toán", "Căn 2PN", "Chủ đầu tư"],
    en: ["Location", "Price", "Progress", "Legal", "Amenities", "Handover standards", "Payment", "2BR Unit", "Developer"],
};

interface SearchItem {
    id: string;
    title: string;
    keywords: string[];
    content: string;
}

const Sale = () => {
    const navigate = useNavigate();
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
                    {/* <Link to="/contact" style={styles.contactLink}> */}
                    <Link to="/SaleDetail" style={styles.contactLink}>
                        <button
                            style={btnHover ? { ...styles.contactBtn, ...styles.contactBtnHover } : styles.contactBtn}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                        >
                            {t('salePage.contactMe')}
                        </button>
                    </Link>

                    {/* Quick Search Widget */}
                    <div style={styles.searchWidget}>
                        <div>
                            <h3 style={styles.searchTitle}>
                                {isVi ? 'Hỏi đáp & Tra cứu nhanh' : 'Project Q&A & Smart Search'}
                            </h3>
                        </div>

                        {/* Search Input Container */}
                        <div style={styles.searchInputWrap}>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={isVi ? 'Nhập câu hỏi hoặc từ khóa (vị trí, giá bán, pháp lý, tiện ích...)' : 'Ask a question or enter keywords (location, price, legal, amenities...)'}
                                style={styles.searchInput}
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
                                    style={styles.searchClearBtn}
                                    title={isVi ? 'Xóa tìm kiếm' : 'Clear search'}
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Suggestion Chips */}
                        <div style={styles.suggestionRow}>
                            <span style={styles.suggestionLabel}>
                                {isVi ? 'Gợi ý từ khóa:' : 'Suggestions:'}
                            </span>
                            {(isVi ? SUGGESTIONS.vi : SUGGESTIONS.en).map((tag) => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setQuery(tag)}
                                    style={
                                        query.toLowerCase() === tag.toLowerCase()
                                            ? { ...styles.suggestionChip, ...styles.suggestionChipActive }
                                            : styles.suggestionChip
                                    }
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        {/* Search Results */}
                        {query.trim() !== '' && (
                            <div style={styles.searchResultsList}>
                                <div style={styles.searchResultsCount}>
                                    {isVi
                                        ? `Tìm thấy ${results.length} thông tin liên quan:`
                                        : `Found ${results.length} related result(s):`}
                                </div>

                                {results.length === 0 ? (
                                    <div style={styles.searchResultEmpty}>
                                        {isVi
                                            ? 'Không tìm thấy thông tin phù hợp với từ khóa này. Bạn có thể thử từ khóa khác hoặc liên hệ trực tiếp để được giải đáp chi tiết.'
                                            : 'No matching information found. Try another keyword or reach out directly for full guidance.'}
                                    </div>
                                ) : (
                                    <div style={styles.searchResultItems}>
                                        {results.map((item) => (
                                            <div key={item.id} style={styles.searchResultItem}>
                                                <div style={styles.searchResultItemHeader}>
                                                    <span style={styles.searchResultTag}>
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <p style={styles.searchResultContent}>
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
                                    style={
                                        isSelected
                                            ? { ...styles.projectCardBase, ...styles.projectCardSelected }
                                            : styles.projectCardBase
                                    }
                                >
                                    <CardItem
                                        title={item.title}
                                        des={item.subtitle}
                                        // onActionClick={() => { navigate(`/project/${item.id}`) }}
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

                    <div style={styles.faqList}>
                        {faqData.map((item: any, idx: number) => (
                            <div key={item.id} style={styles.faqRow}>
                                {/* Timeline column */}
                                <div style={styles.faqTimeline}>
                                    {/* Dot */}
                                    <div style={styles.faqDot} />
                                    {/* Line */}
                                    {idx < faqData.length - 1 && (
                                        <div style={styles.faqLine} />
                                    )}
                                </div>

                                {/* Content */}
                                <div style={idx < faqData.length - 1 ? styles.faqContentColSpaced : styles.faqContentCol}>
                                    <div style={styles.faqCard}>
                                        {/* Badge */}
                                        <span style={styles.faqCategoryBadge}>
                                            {item.category}
                                        </span>

                                        <h3 style={styles.faqQuestion}>
                                            {item.question}
                                        </h3>

                                        <p style={styles.faqAnswer}>
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
