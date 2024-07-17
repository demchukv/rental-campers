import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, style }) => {
  return <div className={css[style]}>{children}</div>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};
