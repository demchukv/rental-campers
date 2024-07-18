import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, style, handler = null }) => {
  return (
    <div className={css[style]} onClick={handler}>
      {children}
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  handler: PropTypes.func,
};
