import css from './CatalogPage.module.css';
import Catalog from '../components/Catalog/Catalog';
import Filters from '../components/Filters/Filters';
import { getCampers } from '../store/camper/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers());
  });

  return (
    <div className={css.catalogPage}>
      <Filters />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
