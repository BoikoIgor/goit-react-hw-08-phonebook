import { Layout } from './Layout/Layout';
// import { GlobalStyle } from './GlobalStyle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { ToastContainer } from 'react-toastify'; // вспливаючі повідомлення
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          // }
        />
        <Route
          path="/login"
          element={<LoginPage />}
          // element={
          //   <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          // }
        />
        <Route
          path="/contacts"
          element={<ContactsPage />}
          // element={
          //   <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          // }
        />
      </Route>
    </Routes>
    // <Layout>
    //   {/* <div> */}
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <Filter />
    //   <ContactList />
    //   <ToastContainer position="top-left" autoClose={2000} />
    //   {/* </div> */}
    //   <GlobalStyle />
    // </Layout>
  );
};
