import { FC } from 'react'
import styles from "./Hero.module.css"

export const Hero: FC = ({ children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.cover}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="699" height="35"
          viewBox="0 0 698 35"
          className={styles.waves}
        >
          <path d="M221.365.015C134.377-.695 0 23.928 0 23.928l.036 11.336 698.579-.938-.037-11.336s-58.05-8.817-95.56-10.735C533.264 8.688 494.384 24.769 424.55 23.358 344.688 21.744 301.24.667 221.365.015z" /></svg>
      </div>
    </div>
  );
};
