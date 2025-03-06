import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>{children}</button>
    </div>
  );
};

export default Button;
