const RADIUS = {
    none: '0px',

    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',

    full: '9999px',
} as const;

export const radius = {
    // Original sizes
    button: RADIUS.md,
    circle: RADIUS.full,
    card: RADIUS.lg,
    input: RADIUS.md,
    section: RADIUS.xl,
    tag: RADIUS.xxxl,
    image: RADIUS.xl,
    message: RADIUS.lg,
    checkBox: RADIUS.sm,
    counter: RADIUS.xl,
    switch: RADIUS.xl,
    slider: RADIUS.md,
    pill: RADIUS.xxxl,
    imagePickerBox: RADIUS.md,
    item: RADIUS.md,
    bar: RADIUS.xs,

    // Custom sizes
    actionItemCard: RADIUS.lg,
    calendarItem: RADIUS.sm,
    messageCornerLightRadius: RADIUS.xs,
    customerHomeHeaderBottomRadius: RADIUS.xxl,
    imageLabelItemImageRadius: RADIUS.lg,
    serviceReportCardImageRadius: RADIUS.lg,
    filterButton: RADIUS.lg,
    miniImage: RADIUS.sm,
} as const;

export type RadiusKey = keyof typeof radius;