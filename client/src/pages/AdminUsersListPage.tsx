import axios from 'axios';
import { useSelector } from 'react-redux';
import { IStateUser, User } from '../components/types/type';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
      <div className="dashBoardAdmin">
        <section className="usersList">
          <div className="usersList__row-title">
            <div className="usersList__column-title">Id</div>
            <div className="usersList__column-title">Email</div>
            <div className="usersList__column-title">Name</div>
            <div className="usersList__column-title">Last name</div>
            <div className="usersList__column-title">Phone</div>
            <div className="usersList__column-title">Role</div>
          </div>
          {users.map((e, i) => {
            return (
              <NavLink
                to={`/dashboard/admin/user/${e.id}`}
                key={i}
                className="usersList__row usersList__link"
              >
                <div className="usersList__column">{e.id}</div>
                <div className="usersList__column">{e.email}</div>
                <div className="usersList__column">{e.name}</div>
                <div className="usersList__column">{e.lastName}</div>
                <div className="usersList__column">{e.phone}</div>
                <div className="usersList__column">
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
