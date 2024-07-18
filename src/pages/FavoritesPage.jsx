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
    <main className={css.favoritesPage}>
      <section className={css.favoritesBlock}>
        <Favorites />
      </section>
    </main>
  );
};

export default FavoritesPage;
