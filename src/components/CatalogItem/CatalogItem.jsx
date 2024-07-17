import css from './CatalogItem.module.css';

const CatalogItem = props => {
  console.log(props);
  return (
    <div className={css.catalogItem}>
      <p>{props.name}</p>
    </div>
  );
};

export default CatalogItem;
