import React, { FC } from 'react';
import 'ress';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import useFetchMyUser from './hooks/useFetchMyUser';
import AddTodoPage from './page/addPage';
import TopPage from './page/topPage';
import EditTodoPage from './page/editTodoPage';
import DetailPage from './page/detailPage';
import SignUpPage from './page/signUpPage';
import SignInPage from './page/signInPage';
import UserPage from './page/userPage';
import SettingPage from './page/settingPage';
import NotificationPage from './page/notificationPage';
import FollowPage from './page/followPage';
import EditProfilePage from './page/editProfilePage';
import ChangePasswordPage from './page/changePasswordPage';

const App: FC = () => {
  const { myUser } = useFetchMyUser();
  return (
    <Router>
      <Layout>
        <Routes>
          {myUser && myUser.isLogin ? (
            <>
              <Route path={'/'} element={<TopPage />} />
              <Route path={'/new'} element={<AddTodoPage />} />
              <Route path={'/user/:id'} element={<UserPage />} />
              <Route path={'/user/:id/follow'} element={<FollowPage />} />
              <Route path={'/todo/:id'} element={<DetailPage />} />
              <Route path={'/todo/:id/edit'} element={<EditTodoPage />} />
              <Route path={'/setting'} element={<SettingPage />} />
              <Route path={'/notification'} element={<NotificationPage />} />
              <Route path={'/user/:id/edit'} element={<EditProfilePage />} />
            </>
          ) : (
            <>
              <Route path={'/'} element={<SignInPage />} />
              <Route path={'/signup'} element={<SignUpPage />} />
              <Route
                path={'/change_password'}
                element={<ChangePasswordPage />}
              />
            </>
          )}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
