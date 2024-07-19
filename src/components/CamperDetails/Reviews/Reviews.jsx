import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import css from './Reviews.module.css';

const Reviews = prop => {
  const reviewRate = rate => {
    const Stars = [];
    for (let i = 1; i <= 5; i++) {
      Stars.push(
        <Icon
          width={16}
          height={16}
          iconName="icon-star"
          key={i}
          styles={i <= rate ? css.iconStarActive : css.iconStar}
        />
      );
    }
    return Stars;
  };

  return (
    <>
      {prop.reviews.map((review, idx) => (
        <div className={css.reviewItem} key={idx}>
          <div className={css.reviewHead}>
            <div className={css.reviewAvatar}>{review.reviewer_name[0]}</div>
            <div className={css.reviewnameAndRate}>
              <div className={css.reviewName}>{review.reviewer_name}</div>
              <div className={css.reviewRate}>
                {reviewRate(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <div className={css.reviewText}>{review.comment}</div>
        </div>
      ))}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  name: PropTypes.string,
};
