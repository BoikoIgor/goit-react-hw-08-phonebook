import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify'; // вспливаючі повідомлення
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Layout>
      {/* <div> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer position="top-left" autoClose={2000} />
      {/* </div> */}
      <GlobalStyle />
    </Layout>
  );
};
