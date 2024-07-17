import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, style }) => {
  let btnStyle = css.button;
  if (style === 'primary') {
    btnStyle = css.primary;
  }
  return <div className={css[style]}>{children}</div>;
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
