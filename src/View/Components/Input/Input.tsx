import { useState, useRef, useEffect, type ChangeEvent, type CSSProperties } from 'react'
import { InputStyle } from './InputStyle';
import { Colors } from '../../DesignSystem/Colors';

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
  type?: React.HTMLInputTypeAttribute;
  errorMessage?: string;
}



const Input = ({ title, titleStyle, placeholder, style, maxLength = 200, statusCountText,
  multiline = false, wrapperStyle, value: externalValue, onChangeText,
  showError, type = "text", errorMessage }: Inputprops) => {
  const [countText, setCountText] = useState<string>(externalValue ?? "");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const hasError = showError || !!errorMessage;
  const borderBottomColor = isLimit
    ? Colors.coral
    : hasError
      ? Colors.coral
      : isFocused
        ? Colors.cyan
        : Colors.navyLight;

  return (
    <div style={{ ...InputStyle.wrapper, ...wrapperStyle }}>
      {title && (
        <label
          htmlFor={title}
          style={{
            ...InputStyle.label,
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
          ref={inputRef}
          id={title}
          type={type}
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
      {hasError && (
        <span style={{ color: Colors.coral, fontSize: '12px', marginTop: '4px', display: 'block' }}>
          {errorMessage}
        </span>
      )}
      {statusCountText && maxLength && (
        <div
          style={{
            ...InputStyle.statusStyle,
            color: isLimit ? Colors.coral : Colors.textMuted,
          }}>
          {formatNumber(countText.length)}/{formatNumber(maxLength)}
        </div>
      )}
    </div>
  )
}


export default Input