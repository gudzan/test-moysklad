import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>
      <h1 className={styles.title}>User To-Do Table</h1>
      <div className={styles.subtitle}>User task table for effective planning.</div>
    </header>
  )
}

export default Header;