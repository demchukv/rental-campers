import { Helmet } from 'react-helmet-async';
import { getCampers } from '../store/camper/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Catalog from '../components/Catalog/Catalog';
import Filters from '../components/Filters/Filters';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const limit = 4;
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      await dispatch(getCampers({ page, limit, ...filters.values }));
    };
    loadData();
  }, [page, limit, filters, dispatch]);

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
          <Filters
            setPage={setPage}
            filters={filters}
            setFilters={setFilters}
          />
        </section>
        <section className={css.catalogBlock}>
          <Catalog page={page} limit={limit} setPage={setPage} />
        </section>
      </main>
    </>
  );
};

export default CatalogPage;
