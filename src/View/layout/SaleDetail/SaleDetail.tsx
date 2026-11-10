import { Link } from "react-router-dom"
import { useSaleDetail } from "../../../ViewModel/useSaleDetail"
import { styles } from "./SaleDetailStyle"

export const SaleDetail = () => {
    const { project, contact, btnHover, setBtnHover, notFound } = useSaleDetail();

    if (notFound || !project) {
        return (
            <section style={styles.mainSection}>
                <div style={styles.contentContainer}>
                    <h1 style={styles.headerTitle}>Thông tin dự án đang được cập nhật</h1>
                    <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '15px' }}>
                        Dữ liệu chi tiết cho dự án này đang được hoàn thiện. Vui lòng quay lại sau!
                    </p>
                    <Link to="/sale" style={styles.contactLink}>← Quay lại danh sách dự án</Link>
                </div>
            </section>
        );
    }

    const p = project as any;

    return (
        <section id="sale-detail" style={styles.mainSection}>
            <div style={styles.contentContainer}>

                {/* ── Hero Banner ── */}
                <div style={styles.heroBanner}>
                    <div style={styles.heroBadge}>{p.category}</div>
                    <h1 style={styles.heroTitle}>{p.name}</h1>
                    <p style={styles.heroSlogan}>{p.slogan}</p>
                    <p style={styles.heroDesc}>{p.description}</p>
                </div>

                {/* ── Grid thông tin chính ── */}
                <div style={styles.infoGrid}>

                    {/* Chủ đầu tư */}
                    <div style={styles.infoCard}>
                        <div style={styles.infoCardIcon}>🏢</div>
                        <div style={styles.infoCardLabel}>Chủ đầu tư</div>
                        <div style={styles.infoCardValue}>{p.developer?.name}</div>
                        {p.developer?.associated_brand && (
                            <div style={styles.infoCardSub}>{p.developer.associated_brand}</div>
                        )}
                    </div>

                    {/* Đơn vị thiết kế */}
                    <div style={styles.infoCard}>
                        <div style={styles.infoCardIcon}>✏️</div>
                        <div style={styles.infoCardLabel}>Thiết kế</div>
                        <div style={styles.infoCardValue}>{p.design_unit?.name}</div>
                        <div style={styles.infoCardSub}>{p.design_unit?.country}</div>
                    </div>

                    {/* Địa chỉ */}
                    <div style={styles.infoCard}>
                        <div style={styles.infoCardIcon}>📍</div>
                        <div style={styles.infoCardLabel}>Vị trí</div>
                        <div style={styles.infoCardValue}>{p.location?.address}</div>
                        {p.location?.river_frontage && (
                            <div style={styles.infoCardSub}>{p.location.river_frontage}</div>
                        )}
                    </div>

                    {/* Quy mô */}
                    {p.project_scale && (
                        <div style={styles.infoCard}>
                            <div style={styles.infoCardIcon}>🏗️</div>
                            <div style={styles.infoCardLabel}>Quy mô</div>
                            <div style={styles.infoCardValue}>{p.project_scale.total_units} căn</div>
                            <div style={styles.infoCardSub}>
                                {p.project_scale.land_area_hectares} ha · {p.project_scale.tower_count} tòa
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Kết nối giao thông ── */}
                {p.location?.nearby_connections?.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>📡 Kết nối giao thông</h2>
                        <div style={styles.tagList}>
                            {p.location.nearby_connections.map((c: any, i: number) => (
                                <div key={i} style={styles.connectionTag}>
                                    <span style={styles.connectionDest}>{c.destination}</span>
                                    <span style={styles.connectionTime}>{c.estimated_travel_time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Loại hình sản phẩm ── */}
                {p.product_types?.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>🏠 Loại hình sản phẩm</h2>
                        <div style={styles.pillRow}>
                            {p.product_types.map((pt: any) => (
                                <span key={pt.id} style={styles.pill}>{pt.name}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Diện tích căn hộ ── */}
                {p.apartment_layouts?.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>📐 Diện tích căn hộ</h2>
                        <div style={styles.layoutGrid}>
                            {p.apartment_layouts.map((l: any, i: number) => (
                                <div key={i} style={styles.layoutCard}>
                                    <div style={styles.layoutBedroom}>
                                        {l.bedrooms ? `${l.bedrooms} PN` : l.type}
                                    </div>
                                    <div style={styles.layoutArea}>
                                        {l.areas
                                            ? l.areas.join(' · ')
                                            : l.size_range} <span style={styles.layoutUnit}>m²</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Tiêu chuẩn bàn giao ── */}
                {p.handover_specifications && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>🔑 Tiêu chuẩn bàn giao</h2>
                        <div style={styles.specGrid}>
                            <div style={styles.specItem}>
                                <span style={styles.specLabel}>Trần thông thủy</span>
                                <span style={styles.specValue}>{p.handover_specifications.clear_ceiling_height_m} m</span>
                            </div>
                            <div style={styles.specItem}>
                                <span style={styles.specLabel}>Điều hòa</span>
                                <span style={styles.specValue}>{p.handover_specifications.air_conditioning}</span>
                            </div>
                            {p.handover_specifications.kitchen?.brand && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Bếp</span>
                                    <span style={styles.specValue}>
                                        {p.handover_specifications.kitchen.brand} ({p.handover_specifications.kitchen.country})
                                    </span>
                                </div>
                            )}
                            {p.handover_specifications.bathroom?.brand && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Thiết bị vệ sinh</span>
                                    <span style={styles.specValue}>
                                        {p.handover_specifications.bathroom.brand} ({p.handover_specifications.bathroom.country})
                                    </span>
                                </div>
                            )}
                            {p.handover_specifications.elevators?.brand && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Thang máy</span>
                                    <span style={styles.specValue}>{p.handover_specifications.elevators.brand}</span>
                                </div>
                            )}
                            {p.handover_specifications.flooring?.bedrooms && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Sàn phòng ngủ</span>
                                    <span style={styles.specValue}>{p.handover_specifications.flooring.bedrooms}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── Tiện ích nổi bật ── */}
                {p.amenities?.highlights?.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>✨ Tiện ích nội khu</h2>
                        {p.amenities.total_count && (
                            <p style={styles.amenityCount}>{p.amenities.total_count} tiện ích</p>
                        )}
                        <div style={styles.amenityGrid}>
                            {(Array.isArray(p.amenities.highlights)
                                ? p.amenities.highlights
                                : []
                            ).map((h: any, i: number) => (
                                <div key={i} style={styles.amenityCard}>
                                    <div style={styles.amenityName}>
                                        {typeof h === "string" ? h : h.name}
                                    </div>
                                    {typeof h !== "string" && h.description && (
                                        <div style={styles.amenityDesc}>{h.description}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Tiến độ xây dựng ── */}
                {p.construction_progress?.blocks?.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>🏗️ Tiến độ xây dựng</h2>
                        <p style={styles.progressNote}>Cập nhật: {p.construction_progress.last_updated}</p>
                        <div style={styles.progressGrid}>
                            {p.construction_progress.blocks.map((b: any, i: number) => (
                                <div key={i} style={styles.progressCard}>
                                    <div style={styles.progressBlock}>Block {b.block}</div>
                                    <div style={styles.progressPhase}>Phase {b.phase}</div>
                                    <div style={styles.progressStatus}>{b.current_status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Pháp lý ── */}
                {p.legal && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>📋 Pháp lý</h2>
                        <div style={styles.specGrid}>
                            {p.legal.construction_permit?.status && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Giấy phép xây dựng</span>
                                    <span style={styles.specValue}>{p.legal.construction_permit.status}</span>
                                </div>
                            )}
                            {p.legal.foreign_buyers?.reported_ownership_term && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Người nước ngoài</span>
                                    <span style={styles.specValue}>{p.legal.foreign_buyers.reported_ownership_term}</span>
                                </div>
                            )}
                            {p.legal.master_plan && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Quy hoạch</span>
                                    <span style={styles.specValue}>{p.legal.master_plan}</span>
                                </div>
                            )}
                            {p.legal.bank_guarantee && (
                                <div style={styles.specItem}>
                                    <span style={styles.specLabel}>Bảo lãnh ngân hàng</span>
                                    <span style={styles.specValue}>{p.legal.bank_guarantee}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── CTA liên hệ ── */}
                {contact && (
                    <div style={styles.ctaBox}>
                        <h2 style={styles.ctaTitle}>{contact.cta_text}</h2>
                        <p style={styles.ctaName}>{contact.consultant_name} · {contact.company}</p>
                        <a href={`https://zalo.me/0932224895`} style={{ textDecoration: 'none' }}>
                            <button
                                style={btnHover ? { ...styles.contactBtn, ...styles.contactBtnHover } : styles.contactBtn}
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                            >
                                📞 {contact.phone}
                            </button>
                        </a>
                        <Link to="/sale" style={styles.backLink}>← Xem dự án khác</Link>
                    </div>
                )}

            </div>
        </section>
    );
};
