
export const themeTokens = {
    ink: 'oklch(14% 0.015 260)',
    inkMid: 'oklch(42% 0.012 255)',
    inkMuted: 'oklch(66% 0.008 255)',
    paper: 'oklch(98.5% 0.005 250)',
    paperCard: 'oklch(100% 0 0)',
    paperTrans: 'oklch(100% 0 0 / 0.85)',
    accent: 'oklch(52% 0.18 265)',
    accentLight: 'oklch(52% 0.18 265 / 0.08)',
    rule: 'oklch(90% 0.01 250)',
    shadow: '0 8px 24px oklch(0% 0 0 / 0.08)',
    shadowLg: '0 20px 40px oklch(0% 0 0 / 0.12)',
    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    accentMid: 'oklch(52% 0.18 265 / 0.20)',
    fontMono: "'ui-monospace', 'Cascadia Code', Consolas, monospace",
} as const;

export const t = themeTokens;
