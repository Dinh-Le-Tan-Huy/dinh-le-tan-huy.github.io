// Bỏ import TextStyle của react-native
import React from 'react';

// Chuyển đổi px sang rem (giả sử 16px = 1rem)
const sizes = {
    tiny: '0.625rem',   // 10px
    small: '0.75rem',   // 12px
    medium: '0.875rem', // 14px
    large: '1rem',      // 16px
    xlarge: '1.125rem', // 18px
    xxlarge: '1.25rem', // 20px
    xxxlarge: '1.375rem',// 22px
} as const;

// Thêm fallback sans-serif để trình duyệt không bị lỗi font
const FONT_FAMILY = "'Inter', sans-serif";

export const typography = {
    heading1: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.xxxlarge,
        lineHeight: '1.75rem', // ~28px
        fontWeight: 600,
    },

    heading2: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.xxlarge,
        lineHeight: '1.625rem', // ~26px
        fontWeight: 600,
    },

    heading3: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.xlarge,
        lineHeight: '1.5rem', // ~24px
        fontWeight: 700,
    },

    body1: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.large,
        lineHeight: '1.5rem', // ~24px
        fontWeight: 500,
    },

    body2: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.medium,
        lineHeight: '1.25rem', // ~20px
        fontWeight: 500,
    },

    body3: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.small,
        lineHeight: '1rem', // ~16px
        fontWeight: 400,
    },

    label1: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.medium,
        lineHeight: '1.25rem', // ~20px
        fontWeight: 600,
    },

    label2: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.small,
        lineHeight: '1rem', // ~16px
        fontWeight: 500,
    },

    caption: {
        fontFamily: FONT_FAMILY,
        fontSize: sizes.small,
        lineHeight: '1rem', // ~16px
        fontWeight: 500,
    },
} satisfies Record<string, React.CSSProperties>;