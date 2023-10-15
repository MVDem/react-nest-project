import { useSelector } from 'react-redux';
import { IStateUser, User } from '../components/types/type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetales } from '../components/http/requests';
import UserProjects from '../components/layouts/admin/userProjects';
import UserPersonal from '../components/layouts/admin/userPersonal';

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
    <div className="dashBoardAdmin">
      <div className="userDetails">
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
