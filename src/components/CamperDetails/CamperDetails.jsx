import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import BookForm from './BookForm/BookForm';
import Reviews from './Reviews/Reviews';
import Features from './Features/Features';
import css from './CamperDetails.module.css';

const CamperDetails = props => {
  const [visiblePanel, setVisiblePanel] = useState('features');
  const [tabLinkClass, setTabLinkClass] = useState({
    features: [css.camperTabPanelLink, css.camperTabPanelLinkActive].join(' '),
    reviews: css.camperTabPanelLink,
  });
  const price = Number(props.price).toFixed(2);

  const switchToTab = tab => {
    tab;
    setTabLinkClass({
      features: css.camperTabPanelLink,
      reviews: css.camperTabPanelLink,
      [tab]: [tabLinkClass[tab], css.camperTabPanelLinkActive].join(' '),
    });
    setVisiblePanel(tab);
  };

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
              <li className={css.camperTabsItem}>
                <a
                  className={tabLinkClass.features}
                  href="#features"
                  onClick={() => switchToTab('features')}
                >
                  Features
                </a>
              </li>
              <li className={css.camperTabsItem}>
                <a
                  className={tabLinkClass.reviews}
                  href="#reviews"
                  onClick={() => switchToTab('reviews')}
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className={css.camperTabsContent}>
            <div className={css.camperTabsPanels}>
              <div className={css.camperTabPanel} id="features">
                {visiblePanel === 'features' && <Features {...props} />}
                {visiblePanel === 'reviews' && <Reviews {...props} />}
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
