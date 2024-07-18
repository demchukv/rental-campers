import { useState, useEffect } from 'react';
import {
  selectFilteredCampers,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import css from './Catalog.module.css';

const Catalog = () => {
  const LIMIT = 4;
  const campersList = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  const visibleItems = campersList.slice(0, LIMIT * page);

  useEffect(() => {
    if (campersList.length > LIMIT * page) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  }, [campersList, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {!isError && !isLoading && (
        <>
          <ul className={css.catalogList}>
            {visibleItems.map(camper => (
              <CatalogItem key={camper._id} {...camper} />
            ))}
          </ul>
          {showLoadMore && (
            <div className={css.loadBtn}>
              <Button style="outlined" handler={handleLoadMore}>
                Load more
              </Button>
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

export default Catalog;
