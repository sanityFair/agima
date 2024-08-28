import { ReactNode, useState } from "react";
import styles from "./styles.module.css";

type CheckBoxProps = {
  label?: ReactNode;
  value?: boolean;
  onChange?: (checked: boolean) => void;
};

export const CheckBox = ({ label, value = false, onChange }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(value);

  const toggleCheck = () => {
    onChange && onChange(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.root}>
      <input
        type="checkbox"
        checked={isChecked}
        id="checkbox"
        onChange={toggleCheck}
      />
      <label htmlFor="checkbox" />
      <span>{label}</span>
    </div>
  );
};
