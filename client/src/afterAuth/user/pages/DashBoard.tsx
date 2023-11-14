import { useSelector } from 'react-redux';
import { IStateUser } from '../../assets/types/type';
import { CardPlans } from '../components/mainCard/CardPlans';
import { CardAlarms } from '../components/mainCard/CardAlarms';
import { CardNotification } from '../components/mainCard/CardNotification';
import { CardContacts } from '../components/mainCard/CardContacts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './scss/dashboard.module.scss';

export default function DashBoard() {
  const navigate = useNavigate();

  const user = useSelector((state: IStateUser) => state.user);

  const isAdmin = user.roles?.find((e) => e === 'ADMIN');

  const isUser = user.roles?.find((e) => e === 'USER');

  useEffect(() => {
    if (isAdmin) {
      navigate('/dashboard/admin/users', { replace: true });
    }
  }, [user]);

  return (
    <>
      {isAdmin && (
        <>
          <div className={styles.dashboard}></div>
        </>
      )}
      {isUser && (
        <div className={styles.dashboard}>
          <div className={styles.dashboard__plans}>
            <CardPlans />
          </div>
          <div className={styles.dashboard__alarms}>
            <CardAlarms />
          </div>
          <div className={styles.dashboard__notification}>
            <CardNotification />
          </div>
          <div className={styles.dashboard__contacts}>
            <CardContacts />
          </div>
        </div>
      )}
    </>
  );
}
