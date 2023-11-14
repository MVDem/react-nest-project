import { Route, Routes } from 'react-router-dom';
import LayOutHome from './beforeAuth/pages/LayOutHome';
import HomePage from './beforeAuth/pages/HomePage';
import AboutPage from './beforeAuth/pages/AboutPage';
import { Private, PrivateAdmin } from './assets/hocs/Private';
import SignInPage from './beforeAuth/pages/SignInPage';
import SignUpPage from './beforeAuth/pages/SignUpPage';
import Layout from './afterAuth/user/pages/Layout';
import UsersList from './afterAuth/admin/pages/AdminUsersListPage';
import UserDetails from './afterAuth/admin/pages/AdminUserDetailsPage';
import ProjectDetails from './afterAuth/admin/pages/AdminProjectDetailsPage';
import DashBoard from './afterAuth/user/pages/DashBoard';
import UserProfile from './afterAuth/user/pages/UserProfile';
import SystemsPage from './afterAuth/user/pages/SystemsPage';

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
