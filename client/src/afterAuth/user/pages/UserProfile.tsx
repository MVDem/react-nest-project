import { useSelector } from 'react-redux';
import { IStateUser, Role, User } from '../../../assets/types/type';
import { useEffect, useState } from 'react';
import { getUserDetales } from '../../../assets/http/requests';
import styles from './scss/userPrifile.module.scss';
import InputImage from '../components/InputImage';
import InputText from '../components/InputText';

export default function UserProfile() {
  const [userDetailed, setUserDetailed] = useState<User>();

  const [isInputText, setIsInputText] = useState(false);
  const [atrInputText, setatrInputText] = useState('');
  const [isInputImage, setIsInputImage] = useState(false);

  const user = useSelector((state: IStateUser) => state.user);
  const isUser = user.roles?.find((e) => e === 'USER');

  const getuserDetailed = () => {
    const bodySent = { userId: user.id };
    getUserDetales(bodySent, user.token, setUserDetailed);
  };

  useEffect(() => {
    getuserDetailed();
  }, [user]);

  const handleChange = (atr: string) => {
    setIsInputText(true);
    setatrInputText(atr);
  };

  return (
    <>
      {isUser && (
        <div className={styles.profile}>
          <section className={styles.profile__container}>
            <div className={styles.profile__avatar}>
              <img
                src={
                  userDetailed
                    ? `http://localhost:5000/${userDetailed?.avatar}`
                    : '#'
                }
                alt="avatar"
              />
              <button onClick={() => setIsInputImage(true)}>new avatar</button>
            </div>
            <div className={styles.profile__info}>
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
              className={styles.profile__formAvatar}
              style={{
                display: isInputText ? 'flex' : 'none',
              }}
            >
              <InputText
                getuserDetailed={getuserDetailed}
                setIsInputText={setIsInputText}
                setatrInputText={setatrInputText}
                atrInputText={atrInputText}
              />
            </div>
            <div
              className={styles.profile__formAvatar}
              style={{
                display: isInputImage ? 'flex' : 'none',
              }}
            >
              <InputImage
                getuserDetailed={getuserDetailed}
                setIsInputImage={setIsInputImage}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
