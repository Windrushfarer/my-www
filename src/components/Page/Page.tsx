import styles from './Page.module.css'

export const Page: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}