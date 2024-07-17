import css from './Catalog.module.css';
import {
  selectCampers,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

const Catalog = () => {
  const campersList = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const handleFavorite = _id => {
    console.log(_id);
  };

  return (
    <>
      {!isError && !isLoading && (
        <section className={css.catalogBlock}>
          <ul className={css.catalogList}>
            {campersList.map(camper => (
              <CatalogItem
                key={camper._id}
                {...camper}
                handleFavorite={handleFavorite}
              />
            ))}
          </ul>
          <div className={css.loadBtn}>
            <Button style="outlined">Load more</Button>
          </div>
        </section>
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

export default Catalog;
