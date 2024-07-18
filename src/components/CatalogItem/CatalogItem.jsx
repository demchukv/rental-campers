import PropTypes from 'prop-types';
import css from './CatalogItem.module.css';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { firstToUpper } from '../../helpers/string';
import { getFavorites } from '../../store/camper/operations';
import { useDispatch } from 'react-redux';

const CatalogItem = props => {
  const dispatch = useDispatch();
  const price = Number(props.price).toFixed(2);

  const onClickFavorite = () => {
    dispatch(getFavorites(props._id));
  };

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
            <div>
              <button
                type="button"
                className={css.favoriteButton}
                onClick={() => {
                  onClickFavorite();
                }}
              >
                <Icon
                  width={24}
                  height={24}
                  iconName="icon-heart-def"
                  styles={css.iconFavorite}
                />
              </button>
            </div>
          </div>
        </div>
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
        <div className={css.camperDecsription}>{props.description}</div>
        <div className={css.camperBadges}>
          <Badge icon="icon-people">{props.adults} adults</Badge>
          <Badge icon="icon-engine">{firstToUpper(props.transmission)}</Badge>
          <Badge icon="icon-petrol">{firstToUpper(props.engine)}</Badge>
          <Badge icon="icon-kitchen">Kitchen</Badge>
          <Badge icon="icon-bed">2 beds</Badge>
          <Badge icon="icon-electro">AC</Badge>
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
  _id: PropTypes.string.isRequired,
};
