import {
  selectCampers,
  selectFavorites,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import Loader from '../Loader/Loader';
import css from './Favorites.module.css';

const Favorites = () => {
  const campersList = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const favoriteList = campersList.filter(camper =>
    favorites.includes(camper._id)
  );

  return (
    <>
      {!isError && !isLoading && (
        <>
          {favoriteList.length > 0 && (
            <ul className={css.catalogList}>
              {favoriteList.map(camper => (
                <CatalogItem key={camper._id} {...camper} />
              ))}
            </ul>
          )}
          {favoriteList.length === 0 && (
            <div className="errorMessage">
              You do not have any favorites yet
            </div>
          )}
        </>
      )}
      {isError && (
        <div className="errorMessage">
          Something went wrong. Please try again later. {isError}
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Favorites;
