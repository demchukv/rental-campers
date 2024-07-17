import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Container from './Container/Container';

const Layout = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={null}>{children}</Suspense>
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
