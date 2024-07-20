import { Helmet } from 'react-helmet-async';
import { getCampers } from '../store/camper/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Favorites from '../components/Favorites/Favorites';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <>
      <Helmet>
        <title>Your Favorite Campers</title>
        <meta
          name="keywords"
          content="saved campers, preferred rentals, camper wishlist"
        />
        <meta
          name="description"
          content="Keep track of your favorite campers! Browse through your saved selections and plan your dream vacation with Rental-Camper."
        />
      </Helmet>
      <main className={css.favoritesPage}>
        <section className={css.favoritesBlock}>
          <Favorites />
        </section>
      </main>
    </>
  );
};

export default FavoritesPage;
