import css from './Container.module.css';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

const Container = ({ children }) => {
  return (
    <div className={css.container}>
      <Menu />
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
