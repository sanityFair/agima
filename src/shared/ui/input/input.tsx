import { forwardRef, InputHTMLAttributes, ReactNode, RefObject } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  error?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<any, Props>(
  ({ value, onChange, label, error, ...props }, ref) => {
    return (
      <div
        className={classNames(styles.root, {
          [styles.error]: !!error,
        })}
      >
        <input type={props.type || "text"} {...props} ref={ref} />
        <label htmlFor={props.name}>{label}</label>
        {error && <div className={styles["error-message"]}>{error}</div>}
      </div>
    );
  }
);
