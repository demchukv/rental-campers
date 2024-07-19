import { useState } from 'react';
import {
  selectCampers,
  selectFavorites,
  selectIsLoading,
  selectIsError,
} from '../../store/camper/selectors';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import ModalWindow from '../ModalWindow/ModalWindow';
import CamperDetails from '../CamperDetails/CamperDetails';
import Loader from '../Loader/Loader';
import css from './Favorites.module.css';

const Favorites = () => {
  const campersList = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const favoriteList = campersList.filter(camper =>
    favorites.includes(camper._id)
  );
  const handleOpenModal = _id => {
    setModalData(favoriteList.filter(camper => camper._id === _id)[0]);
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
          {favoriteList.length > 0 && (
            <ul className={css.catalogList}>
              {favoriteList.map(camper => (
                <CatalogItem
                  key={camper._id}
                  {...camper}
                  handleOpenModal={handleOpenModal}
                />
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
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal}>
        <CamperDetails {...modalData} />
      </ModalWindow>
    </>
  );
};

export default Favorites;
