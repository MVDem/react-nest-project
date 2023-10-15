import { useSelector } from 'react-redux';
import { IStateUser } from '../components/types/type';
import { CardPlans } from '../components/layouts/users/mainCard/CardPlans';
import { CardAlarms } from '../components/layouts/users/mainCard/CardAlarms';
import { CardNotification } from '../components/layouts/users/mainCard/CardNotification';
import { CardContacts } from '../components/layouts/users/mainCard/CardContacts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
          <div className="dashboard"></div>
        </>
      )}
      {isUser && (
        <div className="dashboard">
          <div className="dashboard__plans">
            <CardPlans />
          </div>
          <div className="dashboard__alarms">
            <CardAlarms />
          </div>
          <div className="dashboard__notification">
            <CardNotification />
          </div>
          <div className="dashboard__contacts">
            <CardContacts />
          </div>
        </div>
      )}
    </>
  );
}
