import axios from 'axios';
import { useSelector } from 'react-redux';
import { IStateUser, User } from '../../assets/types/type';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './scss/usersListPage.module.scss';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const user = useSelector((state: IStateUser) => state.user);
  const url = 'http://localhost:5000/users';

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.dashBoardAdmin}>
        <section className={styles.usersList}>
          <div className={styles.usersList__rowTitle}>
            <div className={styles.usersList__columnTitle}>Id</div>
            <div className={styles.usersList__columnTitle}>Email</div>
            <div className={styles.usersList__columnTitle}>Name</div>
            <div className={styles.usersList__columnTitle}>Last name</div>
            <div className={styles.usersList__columnTitle}>Phone</div>
            <div className={styles.usersList__columnTitle}>Role</div>
          </div>
          {users.map((e, i) => {
            return (
              <NavLink
                to={`/dashboard/admin/user/${e.id}`}
                key={i}
                className={styles.usersList__row}
              >
                <div className={styles.usersList__column}>{e.id}</div>
                <div className={styles.usersList__column}>{e.email}</div>
                <div className={styles.usersList__column}>{e.name}</div>
                <div className={styles.usersList__column}>{e.lastName}</div>
                <div className={styles.usersList__column}>{e.phone}</div>
                <div className={styles.usersList__column}>
                  {e.roles
                    .map((e) => {
                      return e.value;
                    })
                    .join(',')}
                </div>
              </NavLink>
            );
          })}
        </section>
      </div>
    </>
  );
}
