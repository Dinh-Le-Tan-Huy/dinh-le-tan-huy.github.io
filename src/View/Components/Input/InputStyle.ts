import { type CSSProperties } from 'react';
import { Colors } from '../../DesignSystem/Colors';
import { spacing } from '../../DesignSystem/Spacing';
import { typography } from '../../DesignSystem/Typography';

export const InputStyle: Record<string, CSSProperties> = {
    wrapper: {
        width: "100%",
        position: "relative",
        marginBottom: spacing.md,
    },
    label: {
        display: "block",
        textAlign: "left",
        color: Colors.textSecondary,
        marginBottom: spacing.xs,
        ...typography.label2,
    },
    input: {
        width: "100%",
        padding: "12px 4px",
        boxSizing: "border-box",
        background: "transparent",
        color: Colors.text,
        border: "none",
        outline: "none",
        ...typography.body2,
        fontWeight: 600,
        transition: "border-bottom-color 0.25s ease, color 0.25s ease",
    },
    statusStyle: {
        textAlign: "right",
        marginTop: spacing.xs,
        color: Colors.textMuted,
        ...typography.caption,
    },
};