import { useSelector } from 'react-redux';
import { IStateUser, Role, User } from '../components/types/type';
import { useEffect, useState } from 'react';
import { getUserDetales } from '../components/http/requests';

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
        <div className="profile">
          <section className="profile__container">
            <div className="profile__avatar">
              <img src="/image/avatar.jpg" alt="avatar" />
            </div>
            <div className="profile__info">
              <h3 className="userDetails__title">Personal</h3>
              <div className="profile__row">
                <p className="profile__text">Id :</p>
                <p className="profile__text">{userDetailed?.id}</p>
              </div>
              <div className="profile__row">
                <p className="profile__text">Email :</p>
                <button className="profile__btn">
                  {userDetailed?.email}
                  <img src="/image/edit.png" alt="avatar" />
                </button>
              </div>
              <div className="profile__row">
                <p className="profile__text">Name :</p>
                <button className="profile__btn">
                  {userDetailed?.name}
                  <img src="/image/edit.png" alt="avatar" />
                </button>
              </div>
              <div className="profile__row">
                <p className="profile__text">Last name :</p>
                <button className="profile__btn">
                  {userDetailed?.lastName}
                  <img src="/image/edit.png" alt="avatar" />
                </button>
              </div>
              <div className="profile__row">
                <p className="profile__text">Phone :</p>
                <button className="profile__btn">
                  {userDetailed?.phone}
                  <img src="/image/edit.png" alt="avatar" />
                </button>
              </div>
              <div className="profile__row">
                <p className="profile__text">Status :</p>
                <p className="profile__text">
                  {userDetailed?.banned ? 'Bunned' : 'Active'}
                </p>
              </div>
              <div className="profile__row">
                <p className="profile__text">Roles :</p>
                {userDetailed?.roles.map((e: Role, i: number) => {
                  return (
                    <p className="profile__text" key={i}>
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
