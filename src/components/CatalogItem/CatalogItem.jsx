import PropTypes from 'prop-types';
import css from './CatalogItem.module.css';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

const CatalogItem = props => {
  const price = Number(props.price).toFixed(2);
  return (
    <div className={css.catalogItem}>
      <div className={css.imageContainer}>
        <img
          src={props.gallery[0]}
          alt={props.name}
          className={css.camperImage}
        />
      </div>
      <div className={css.camperInfo}>
        <div className={css.camperHead}>
          <h2 className={css.camperName}>{props.name}</h2>
          <div className={css.camperPrice}>
            <div>€{price}</div>
            <div>icon</div>
          </div>
        </div>
        <div className={css.camperRate}>
          {props.rating} ({props.reviews.length} Reviews) {props.location}
        </div>
        <div className={css.camperDecsription}>{props.description}</div>
        <div className={css.camperBadges}>
          <Badge icon="test">{props.adults} adults</Badge>
          <Badge icon="test">{props.transmission}</Badge>
          <Badge icon="test">{props.engine}</Badge>
          <Badge icon="test">Kitchen</Badge>
          <Badge icon="test">2 beds</Badge>
          <Badge icon="test">AC</Badge>
        </div>
        <Button style="primary">Show more</Button>
      </div>
    </div>
  );
};

export default CatalogItem;

CatalogItem.propTypes = {
  name: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  adults: PropTypes.number.isRequired,
  transmission: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
