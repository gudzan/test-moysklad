import useAxios from "../../hooks/useAxios";
import Spinner from "../Spinner";
import Table from "../Table";
import styles from "./Main.module.scss"

const Main = () => {
  const { data, fetching } = useAxios()

  if (fetching) {
    return (
      <main className={styles.main}>
        <Spinner />
      </main>)
  }
  else if (data === null || data.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          К сожалению, ничего не нашлось...
        </div>
      </main>
    )
  }
  else {
    return (
      <main className={styles.main}>
        <Table data={data} />
      </main>
    )
  }
}

export default Main;