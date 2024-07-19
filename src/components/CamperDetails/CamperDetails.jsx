import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import BookForm from './BookForm/BookForm';
import Reviews from './Reviews/Reviews';
import Features from './Features/Features';
import css from './CamperDetails.module.css';

const CamperDetails = props => {
  const price = Number(props.price).toFixed(2);
  return (
    <>
      <div className={css.camperHeader}>
        <h2 className={css.camperName}>{props.name}</h2>
        <div className={css.camperRateLoc}>
          <div className={css.camperRate}>
            <Icon
              width={16}
              height={16}
              iconName="icon-star"
              styles={css.iconStar}
            />
            <span className={css.reviewLink}>
              {props.rating} ({props.reviews.length} Reviews)
            </span>
          </div>
          <div className={css.camperRate}>
            <Icon
              width={16}
              height={16}
              iconName="icon-map-pin"
              styles={css.iconLocation}
            />

            {props.location}
          </div>
        </div>
        <div className={css.camperPrice}>€{price}</div>
      </div>
      <div className={css.camperMain}>
        <div className={css.camperGallery}>
          {props.gallery.map((image, idx) => (
            <div className={css.camperImageContainer} key={idx}>
              <img
                src={image}
                alt={props.name}
                className={css.camperImage}
                width={290}
                height={310}
              />
            </div>
          ))}
        </div>
        <div className={css.camperInfo}>
          <div className={css.camperDescription}>{props.description}</div>
          <div className={css.camperTabsSwitch}>
            <ul className={css.camperTabsList}>
              <li
                className={[css.camperTabsItem, css.camperTabsItemActive].join(
                  ' '
                )}
              >
                Features
              </li>
              <li className={css.camperTabsItem}>Reviews</li>
            </ul>
          </div>
          <div className={css.camperTabsContent}>
            <div className={css.camperTabsPanels}>
              <div className={css.camperTabPanel} id="features">
                <Features {...props} />
              </div>
              <div className={css.camperTabPanel} id="reviews">
                <Reviews {...props} />
              </div>
            </div>
            <div className={css.camperFormArea}>
              <BookForm {...props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamperDetails;

CamperDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  reviews: PropTypes.array,
  location: PropTypes.string,
  price: PropTypes.number,
  gallery: PropTypes.array,
};
