import PropTypes from 'prop-types';
import css from './CatalogItem.module.css';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { firstToUpper } from '../../helpers/string';
import { getFavorites } from '../../store/camper/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../store/camper/selectors';

const CatalogItem = ({ props, handleOpenModal }) => {
  console.log(props);
  const dispatch = useDispatch();
  const price = Number(props.price).toFixed(2);
  const favorites = useSelector(selectFavorites);

  const onClickFavorite = () => {
    dispatch(getFavorites(props));
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
                {favorites && favorites.find(item => item._id === props._id) ? (
                  <Icon
                    width={24}
                    height={24}
                    iconName="icon-heart-pressed"
                    styles={css.iconFavorite}
                  />
                ) : (
                  <Icon
                    width={24}
                    height={24}
                    iconName="icon-heart-def"
                    styles={css.iconFavorite}
                  />
                )}
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
          <Badge icon="icon-adults">{props.adults} adults</Badge>
          <Badge icon="icon-transmission">
            {firstToUpper(props.transmission)}
          </Badge>
          <Badge icon="icon-engine">{firstToUpper(props.engine)}</Badge>
          <Badge icon="icon-kitchen">Kitchen</Badge>
          <Badge icon="icon-beds">2 beds</Badge>
          <Badge icon="icon-ac">AC</Badge>
        </div>
        <Button style="primary" handler={() => handleOpenModal(props._id)}>
          Show more
        </Button>
      </div>
    </div>
  );
};

export default CatalogItem;

CatalogItem.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  adults: PropTypes.number.isRequired,
  engine: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};
