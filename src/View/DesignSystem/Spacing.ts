const BASE_UNIT = 8;

export const spacing = {
    none: '0px',

    xs: `${BASE_UNIT * 0.5}px`, // 4px
    sm: `${BASE_UNIT * 1}px`,   // 8px
    md: `${BASE_UNIT * 2}px`,   // 16px
    lg: `${BASE_UNIT * 3}px`,   // 24px
    xl: `${BASE_UNIT * 4}px`,   // 32px
    xxl: `${BASE_UNIT * 6}px`,  // 48px
    xxxl: `${BASE_UNIT * 8}px`, // 64px

    // Screen padding chuẩn
    screen: `${BASE_UNIT * 2}px`,  // 16px
    bottom: `${BASE_UNIT * 12}px`, // 96px
} as const;

export type SpacingKey = keyof typeof spacing;