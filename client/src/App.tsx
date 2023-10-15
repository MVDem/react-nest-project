import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Layout from './components/layouts/Layout';
import DashBoard from './pages/DashBoard';
import { Private, PrivateAdmin } from './components/hocs/Private';
import UsersList from './pages/AdminUsersListPage';
import UserDetails from './pages/AdminUserDetailsPage';
import SystemsPage from './pages/SystemsPage';
import ProjectDetails from './pages/AdminProjectDetailsPage';
import UserProfile from './pages/UserProfile';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
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
};

export default App;
