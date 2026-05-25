import { useState, useRef, useEffect, type ChangeEvent, type CSSProperties } from 'react'
import { InputStyle } from './InputStyle';

interface Inputprops {
  title?: string;
  placeholder?: string;
  style?: CSSProperties;
  maxLength?: number;
  statusCountText?: boolean;
  multiline?: boolean;
  rows?: number;
  wrapperStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  value?: string;
  onChangeText?: (value: string) => void;
  showError?: boolean;
}



const Input = ({ title, titleStyle, placeholder, style, maxLength = 200, statusCountText, multiline = false, wrapperStyle, value: externalValue, onChangeText, showError }: Inputprops) => {
  const [countText, setCountText] = useState<string>(externalValue ?? "");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea theo nội dung
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [countText]);

  // Sync external value changes
  useEffect(() => {
    setCountText(externalValue ?? "");
  }, [externalValue]);

  const formatNumber = (n: number) => n.toLocaleString('en-US');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setCountText(value);
      onChangeText?.(value);
    }
  }
  // Xác định màu sắc của status dựa trên độ dài
  const isLimit = countText.length === maxLength;

  const borderBottomColor = isLimit
    ? "red"
    : showError
      ? "#e74c3c"
      : isFocused
        ? "var(--accent)"
        : "var(--border)";

  return (
    <div style={{ ...wrapperStyle, width: "100%", marginBottom: "16px" }}>
      {title && (
        <label
          htmlFor={title}
          style={{
            display: "block",
            textAlign: "left",
            fontSize: "13px",
            color: "var(--text-h)",
            marginBottom: "6px",
            fontWeight: 500,
            opacity: 0.85,
            ...titleStyle
          }}>
          {title}
        </label>
      )}

      {multiline ? (
        <textarea
          ref={textareaRef}
          id={title}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={countText}
          rows={3}
          style={{
            ...InputStyle.input,
            resize: "none",
            overflow: "hidden",
            minHeight: "80px",
            borderBottom: `1px solid ${borderBottomColor}`,
            ...style,
          }}
        />
      ) : (
        <input
          id={title}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={countText}
          style={{
            ...InputStyle.input,
            borderBottom: `1px solid ${borderBottomColor}`,
            ...style,
          }}
        />
      )}

      {statusCountText && maxLength && (
        <div
          style={{
            ...InputStyle.statusStyle,
            color: isLimit ? "red" : "var(--text)",
            fontWeight: "normal",
          }}>
          {formatNumber(countText.length)}/{formatNumber(maxLength)}
        </div>
      )}
    </div>
  )
}


export default Input