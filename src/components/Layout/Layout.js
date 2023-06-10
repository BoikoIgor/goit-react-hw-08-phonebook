import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

// import { Container } from './Layout.styled';
// import PropTypes from 'prop-types';

// export const Layout = ({ children }) => {
//   return <Container>{children}</Container>;
// };
// Layout.propTypes = {
//   children: PropTypes.any.isRequired,
// };
