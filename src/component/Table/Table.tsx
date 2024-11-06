import { User } from "../../types/user";
import styles from "./Table.module.scss"
import userIcon from "../../assets/userIcon.svg"

type TableProps = {
  data: User[]
};

const Table = ({ data }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th>#</th>
          <th>USERNAME</th>
          <th>TO-DO COUNT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr className={styles.table__row} key={user.id}>
            <td className={styles.table__cellId}>{user.id}</td>
            <td className={styles.table__cellUser}>
              <UserInfo name={user.name} email={user.email} />
            </td>
            <td className={styles.table__cellCount}>{user.tasksCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type UserInfoProps = {
  name: string,
  email: string
};

const UserInfo = ({ name, email }: UserInfoProps) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.userInfo__img}>
        <img src={userIcon} alt="userIcon" />
      </div>
      <div className={styles.userInfo__inner}>
        <span className={styles.userInfo__name}>{name}</span>
        <span className={styles.userInfo__email}>{email}</span>
      </div>
    </div>
  )
}

export default Table;