import css from './Badge.module.css';
import PropTypes from 'prop-types';

const Badge = ({ children, icon }) => {
  return (
    <div className={css.badge}>
      {icon} {children}
    </div>
  );
};

export default Badge;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};
