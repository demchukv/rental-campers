import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const Filters = () => {
  return (
    <section className={css.filtersBlock}>
      <h2 className={css.filtersTitle}>Filters</h2>
      <Button style="icon-button">
        <Icon
          width={24}
          height={24}
          iconName="icon-engine"
          styles={css.iconFilter}
        />
        <span>AC</span>
      </Button>
    </section>
  );
};

export default Filters;
