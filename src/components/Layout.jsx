import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Container from './Container/Container';
import Loader from './Loader/Loader';

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
