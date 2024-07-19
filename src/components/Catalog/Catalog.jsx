import { useState, useEffect } from 'react';
import {
  selectFilteredCampers,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow';
import CamperDetails from '../CamperDetails/CamperDetails';
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

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
  const handleOpenModal = _id => {
    setModalData(visibleItems.filter(camper => camper._id === _id)[0]);
    openModal();
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {!isError && !isLoading && (
        <>
          {visibleItems.length > 0 && (
            <ul className={css.catalogList}>
              {visibleItems.map(camper => (
                <CatalogItem
                  key={camper._id}
                  {...camper}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </ul>
          )}
          {visibleItems.length === 0 && (
            <div className="errorMessage">No campers found</div>
          )}
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
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal}>
        <CamperDetails {...modalData} />
      </ModalWindow>
    </>
  );
};

export default Catalog;
