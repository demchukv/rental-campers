import PropTypes from 'prop-types';
import css from './Reviews.module.css';

const Reviews = prop => {
  return <div>Reviews {prop.name}</div>;
};

export default Reviews;

Reviews.propTypes = {
  name: PropTypes.string,
};
