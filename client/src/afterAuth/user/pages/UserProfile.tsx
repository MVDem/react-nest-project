import { useSelector } from 'react-redux';
import { IStateUser, Role, User } from '../../../assets/types/type';
import { useEffect, useState } from 'react';
import { editUser, getUserDetales } from '../../../assets/http/requests';
import styles from './scss/userPrifile.module.scss';
//import { setUser } from '../../../assets/store/userSlice';

export default function UserProfile() {
  const [userDetailed, setUserDetailed] = useState<User>();
  const [atrValue, setAtrValue] = useState('');
  const [atrToChange, setAtrToChange] = useState('');
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const opacityValue: string = '0.15';

  const user = useSelector((state: IStateUser) => state.user);

  const isUser = user.roles?.find((e) => e === 'USER');

  const getuserDetailed = () => {
    const bodySent = { userId: user.id };
    getUserDetales(bodySent, user.token, setUserDetailed);
  };

  useEffect(() => {
    getuserDetailed();
  }, [user]);

  //===============================================

  const handleChange = (nameWindow: string) => {
    setIsWindowOpen(true);
    setAtrToChange(nameWindow);
  };

  const hadleCloseWindow = () => {
    setIsWindowOpen(false);
    setAtrToChange('');
  };

  const handleSentChanges = () => {
    const bodySent = {
      token: user.token,
      [atrToChange]: atrValue,
    };
    editUser(bodySent, user.token, getuserDetailed);

    setIsWindowOpen(false);
    setAtrToChange('');
    setAtrValue('');
  };

  return (
    <>
      {isUser && (
        <div className={styles.profile}>
          <section className={styles.profile__container}>
            <div
              className={styles.profile__avatar}
              style={{ opacity: isWindowOpen ? opacityValue : '1' }}
            >
              <img src="/img/avatar.jpg" alt="avatar" />
            </div>
            <div
              className={styles.profile__info}
              style={{ opacity: isWindowOpen ? opacityValue : '1' }}
            >
              <h3 className={styles.userDetails__title}>Personal</h3>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Email :</p>
                <p className={styles.profile__text}>{userDetailed?.email}</p>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Name :</p>
                <button
                  className={styles.profile__btn}
                  onClick={() => handleChange('name')}
                >
                  {userDetailed?.name}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Last name :</p>
                <button
                  className={styles.profile__btn}
                  onClick={() => handleChange('lastName')}
                >
                  {userDetailed?.lastName}
                  <img src="/img/edit.png" alt="edit" />
                </button>
              </div>
              <div className={styles.profile__row}>
                <p className={styles.profile__text}>Phone :</p>
                <button
                  className={styles.profile__btn}
                  onClick={() => handleChange('phone')}
                >
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
            <div
              className={styles.profile__edit}
              style={{ display: isWindowOpen ? 'flex' : 'none' }}
            >
              <div>
                <button onClick={() => hadleCloseWindow()}>
                  <img src="/img/close.svg" alt="close" />
                </button>
              </div>
              <input
                placeholder="write the "
                className={styles.profile__form}
                required={true}
                value={atrValue}
                onChange={(e) => setAtrValue(e.target.value)}
              />
              <button
                className={styles.profile__formBtn}
                onClick={handleSentChanges}
              >
                Send change {atrToChange}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
