import styles from './Main.module.css'

export const Main: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}