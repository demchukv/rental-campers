import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const Filters = () => {
  
  const handleClick = () => {
    console.log(event.target.checked);
    console.log(event.target.name);
  };
  return (
    <>
      <h2 className={css.filtersTitle}>Filters</h2>

      <label className={css.checkboxButton}>
        <input type="checkbox" name="engine" onClick={handleClick} />
        <Button style="icon-button">
          <Icon
            width={24}
            height={24}
            iconName="icon-engine"
            styles={css.iconFilter}
          />
          <span>AC</span>
        </Button>
      </label>
      <label className={css.checkboxButton}>
        <input type="checkbox" name="kitchen" onClick={handleClick} />
        <Button style="icon-button">
          <Icon
            width={24}
            height={24}
            iconName="icon-kitchen"
            styles={css.iconFilter}
          />
          <span>Kitchen</span>
        </Button>
      </label>
    </>
  );
};

export default Filters;
