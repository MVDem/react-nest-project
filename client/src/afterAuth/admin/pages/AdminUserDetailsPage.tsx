import { useSelector } from 'react-redux';
import { IStateUser, User } from '../../../assets/types/type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetales } from '../../../assets/http/requests';
import UserProjects from '../components/userProjects';
import UserPersonal from '../components/userPersonal';
import styles from './scss/userDetales.module.scss';

export default function UserDetails() {
  const [userDetailed, setUserDetailed] = useState<User>();
  const user = useSelector((state: IStateUser) => state.user);
  const { id } = useParams();

  const getuserDetailed = () => {
    const bodySent = { userId: id };
    getUserDetales(bodySent, user.token, setUserDetailed);
  };

  useEffect(() => {
    getuserDetailed();
  }, []);

  return (
    <div className={styles.dashBoardAdmin}>
      <div className={styles.userDetails}>
        <UserPersonal
          id={id}
          getuserDetailed={getuserDetailed}
          userDetailed={userDetailed}
        />
        <UserProjects
          id={id}
          getuserDetailed={getuserDetailed}
          projects={userDetailed?.projects}
        />
      </div>
    </div>
  );
}
