import PropTypes from 'prop-types';
import css from './Features.module.css';

const Features = props => {
  return <div>Features {props.name}</div>;
};

export default Features;

Features.propTypes = {
  name: PropTypes.string,
};
