import { Route, Routes } from 'react-router-dom';
import LayOutHome from './beforeAuth/pages/LayOutHome';
import HomePage from './beforeAuth/pages/HomePage';
import AboutPage from './beforeAuth/pages/AboutPage';
import { Private, PrivateAdmin } from './assets/hocs/Private';
import SignInPage from './beforeAuth/pages/SignInPage';
import SignUpPage from './beforeAuth/pages/SignUpPage';
import Layout from './afterAuthUser/pages/Layout';
import UsersList from './afterAuthAdmin/pages/AdminUsersListPage';
import UserDetails from './afterAuthAdmin/pages/AdminUserDetailsPage';
import ProjectDetails from './afterAuthAdmin/pages/AdminProjectDetailsPage';
import DashBoard from './afterAuthUser/pages/DashBoard';
import UserProfile from './afterAuthUser/pages/UserProfile';
import SystemsPage from './afterAuthUser/pages/SystemsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOutHome />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route
            path="/dashboard/admin/users"
            element={
              <PrivateAdmin>
                <UsersList />
              </PrivateAdmin>
            }
          />
          <Route
            path="/dashboard/admin/user/:id"
            element={
              <PrivateAdmin>
                <UserDetails />
              </PrivateAdmin>
            }
          />
          <Route
            path="/dashboard/admin/user/:userId/:projectId"
            element={
              <PrivateAdmin>
                <ProjectDetails />
              </PrivateAdmin>
            }
          />
          <Route
            index
            element={
              <Private>
                <DashBoard />
              </Private>
            }
          />
          <Route
            path="/dashboard/user/profile/:id"
            element={
              <Private>
                <UserProfile />
              </Private>
            }
          />
          <Route
            path="/dashboard/user/:projectId"
            element={
              <Private>
                <SystemsPage />
              </Private>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
