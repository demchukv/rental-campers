import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  selectCampers,
  selectTotalCampers,
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

const Catalog = ({ page, limit, setPage }) => {
  const campersList = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (totalCampers > limit * page) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  }, [totalCampers, limit, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const handleOpenModal = _id => {
    setModalData(campersList.filter(camper => camper._id === _id)[0]);
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
      {!isError && (
        <>
          {campersList.length > 0 && (
            <ul className={css.catalogList}>
              {campersList.map(camper => (
                <CatalogItem
                  key={camper._id}
                  props={camper}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </ul>
          )}
          {campersList.length === 0 && (
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

Catalog.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
