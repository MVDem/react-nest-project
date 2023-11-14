import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { IStateUser } from '../types/type';

const Private = ({ children }: any) => {
  const location = useLocation();
  const user = useSelector((state: IStateUser) => state.user);

  if (!user.token) {
    return <Navigate to="/signIn" state={{ from: location }} />;
  }
  return children;
};

const PrivateAdmin = ({ children }: any) => {
  const location = useLocation();
  const user = useSelector((state: IStateUser) => state.user);

  const admin = user.roles?.find((e) => {
    if (e === 'ADMIN') {
      return true;
    }
    return false;
  });

  if (!admin) {
    return <Navigate to="/signIn" state={{ from: location }} />;
  }
  return children;
};

export { Private, PrivateAdmin };
