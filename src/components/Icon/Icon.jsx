import PropTypes from 'prop-types';
import sprite from '../../assets/icons/icons.svg?421563';

const Iconsvg = ({ width, height, iconName, styles }) => {
  return (
    <svg width={width} height={height} className={styles}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Iconsvg;

Iconsvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  iconName: PropTypes.string,
  styles: PropTypes.string,
};
