import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dataThePriveVI from "../locales/vi/Data-The-Prive.json";
import dataThePriveEN from "../locales/en/Data-The-Prive.json";
import dataThePalmVI from "../locales/vi/Data-The-Palm.json";
import dataThePalmEN from "../locales/en/Data-The-Palm.json";

type ProjectData = Record<string, any>;

interface LocalizedProject {
    vi: ProjectData;
    en: ProjectData;
}

const PROJECT_MAP: Record<string, LocalizedProject> = {
    "the-prive": { vi: dataThePriveVI, en: dataThePriveEN },
    "project_01": { vi: dataThePriveVI, en: dataThePriveEN },
    "project-01": { vi: dataThePriveVI, en: dataThePriveEN },
    "palm-river": { vi: dataThePalmVI, en: dataThePalmEN },
    "palm-city": { vi: dataThePalmVI, en: dataThePalmEN },
    "project_03": { vi: dataThePalmVI, en: dataThePalmEN },
    "project-03": { vi: dataThePalmVI, en: dataThePalmEN },
};

export const useSaleDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [btnHover, setBtnHover] = useState(false);
    const { i18n } = useTranslation();

    const isEn = i18n.language?.startsWith("en");

    const data = useMemo<ProjectData | null>(() => {
        if (!projectId) return null;
        const projectEntry = PROJECT_MAP[projectId];
        if (!projectEntry) return null;
        return isEn ? projectEntry.en : projectEntry.vi;
    }, [projectId, isEn]);

    const project = data?.project ?? null;
    const sections: { id: string; title: string; source: string }[] =
        data?.website_display?.sections ?? [];
    const rawContact = data?.website_display?.contact;
    const contact = data ? {
        consultant_name: rawContact?.consultant_name?.trim() || "Huy Lê",
        company: rawContact?.company?.trim() || (isEn ? "Luxury Real Estate Advisor" : "Chuyên viên Bất động sản"),
        phone: rawContact?.phone?.trim() || "0932 224 895",
        cta_text: rawContact?.cta_text?.trim() || (isEn ? "Contact for the latest price list & policy" : "Nhận bảng giá và chính sách mới nhất"),
    } : null;

    return {
        project,
        sections,
        contact,
        btnHover,
        setBtnHover,
        projectId,
        notFound: !data,
    };
};

