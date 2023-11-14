import { useSelector } from 'react-redux';
import { IStateUser, Role, User } from '../../assets/types/type';
import { useEffect, useState } from 'react';
import { getUserDetales } from '../../assets/http/requests';
import styles from './scss/userPrifile.module.scss';

export default function UserProfile() {
  const [userDetailed, setUserDetailed] = useState<User>();

  const user = useSelector((state: IStateUser) => state.user);

  const isUser = user.roles?.find((e) => e === 'USER');

  const getuserDetailed = () => {
    const bodySent = { userId: user.id };
    getUserDetales(bodySent, user.token, setUserDetailed);
  };

  useEffect(() => {
    getuserDetailed();
  }, [user]);

  return (
    <>
      {isUser && (
        <div className={styles.profile}>
          <section className={styles.profile__container}>
            <div className={styles.profile__avatar}>
              <img src="/img/avatar.jpg" alt="avatar" />
            </div>
            <div className={styles.profile__info}>
              <h3 className={styles.userDetails__title}>Personal</h3>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Id :</p>
                <p className={styles.profile__text}>{userDetailed?.id}</p>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Email :</p>
                <button className={styles.profile__btn}>
                  {userDetailed?.email}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Name :</p>
                <button className={styles.profile__btn}>
                  {userDetailed?.name}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Last name :</p>
                <button className={styles.profile__btn}>
                  {userDetailed?.lastName}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Phone :</p>
                <button className={styles.profile__btn}>
                  {userDetailed?.phone}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Status :</p>
                <p className={styles.profile__text}>
                  {userDetailed?.banned ? 'Bunned' : 'Active'}
                </p>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Roles :</p>
                {userDetailed?.roles.map((e: Role, i: number) => {
                  return (
                    <p className={styles.profile__text} key={i}>
                      {e.value}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
