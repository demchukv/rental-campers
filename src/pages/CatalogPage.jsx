import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Browse Our Camper Models</title>
        <meta
          name="keywords"
          content="camper models, rental options, explore campers"
        />
        <meta
          name="description"
          content="Discover our range of camper models available for rent. From cozy campers to spacious options, find the perfect fit for your next adventure with Rental-Camper."
        />
      </Helmet>
      <main className={css.catalogPage}>
        <section className={css.filtersBlock}>
          <Filters />
        </section>
        <section className={css.catalogBlock}>
          <Catalog />
        </section>
      </main>
    </>
  );
};

export default CatalogPage;
