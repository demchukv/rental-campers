import css from './Badge.module.css';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const Badge = ({ children, icon }) => {
  return (
    <div className={css.badge}>
      <Icon width={20} height={20} iconName={icon} styles={css.icon} />{' '}
      {children}
    </div>
  );
};

export default Badge;

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
};
