import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({
  children,
  style = 'primary',
  type = 'button',
  disabled = false,
  handler = null,
}) => {
  return (
    <button
      className={css[style]}
      onClick={handler}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  handler: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
