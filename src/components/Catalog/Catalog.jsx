import css from './Catalog.module.css';
import {
  selectCampers,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';

const Catalog = () => {
  const campersList = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {!isError && !isLoading && (
        <section className={css.catalogBlock}>
          <ul className={css.catalogList}>
            {campersList.map(camper => (
              <CatalogItem key={camper._id} {...camper} />
            ))}
          </ul>
        </section>
      )}
      {isError && (
        <div className="errorMessage">
          Something went wrong. Please try again later. {isError}
        </div>
      )}
    </>
  );
};

export default Catalog;
