import { forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = {
  placeholder?: string;
  rows?: number;
  cols?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<any, Props>(
  (
    { placeholder = "", rows = 3, cols = 50, value, onChange, ...props },
    ref
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(event);
      }
    };
    return (
      <textarea
        ref={ref}
        className={styles.root}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value || ""}
        onChange={handleChange}
        {...props}
      />
    );
  }
);
