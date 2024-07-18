import { getCampers } from '../store/camper/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Catalog from '../components/Catalog/Catalog';
import Filters from '../components/Filters/Filters';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <main className={css.catalogPage}>
      <section className={css.filtersBlock}>
        <Filters />
      </section>
      <section className={css.catalogBlock}>
        <Catalog />
      </section>
    </main>
  );
};

export default CatalogPage;
