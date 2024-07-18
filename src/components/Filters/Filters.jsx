import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const Filters = () => {
  const equipmentFilterIcon = [
    { name: 'airConditioner', icon: 'icon-ac', sign: 'AC' },
    { name: 'transmission', icon: 'icon-engine', sign: 'Automatic' },
    { name: 'kitchen', icon: 'icon-kitchen', sign: 'Kitchen' },
    { name: 'TV', icon: 'icon-tv', sign: 'TV' },
    { name: 'shower', icon: 'icon-shower', sign: 'Shower/WC' },
  ];
  const typeFilterIcon = [
    { value: 'panelTruck', icon: 'icon-paneltruck', sign: 'Van' },
    {
      value: 'fullyIntegrated',
      icon: 'icon-fullyintegrated',
      sign: 'Fully Integrated',
    },
    { value: 'alcove', icon: 'icon-alcove', sign: 'Alcove' },
  ];

  const handleClick = () => {
    console.log(event.target.checked);
    console.log(event.target.name);
  };
  return (
    <>
      <div className={css.filterBlock}>
        <label htmlFor="location" className={css.locationLabel}>
          Location
        </label>
        <div className={css.locationIconContainer}>
          <Icon
            width={24}
            height={24}
            iconName="icon-map-pin"
            styles={css.iconLocation}
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City"
            className={css.locationInput}
            autoComplete="off"
          />
        </div>
      </div>

      <div className={css.locationLabel}>Filters</div>
      <div className={css.filterBlock}>
        <p className={css.filterGroup}>Vehicle equipment</p>
        <div className={css.filters}>
          {equipmentFilterIcon.map(({ name, icon, sign }) => (
            <label className={css.checkboxButton} key={name}>
              <input type="checkbox" name="{name}" onClick={handleClick} />
              <Button style="icon-button">
                <Icon
                  width={24}
                  height={24}
                  iconName={icon}
                  styles={css.iconFilter}
                />
                <span>{sign}</span>
              </Button>
            </label>
          ))}
        </div>
      </div>
      <div className={css.filterBlock}>
        <p className={css.filterGroup}>Vehicle type</p>
        <div className={css.filters}>
          {typeFilterIcon.map(({ value, icon, sign }) => (
            <label className={css.checkboxButton} key={value}>
              <input
                type="radio"
                name="type"
                id="type{value}"
                value={value}
                onClick={handleClick}
              />
              <Button style="icon-button">
                <Icon
                  width={24}
                  height={24}
                  iconName={icon}
                  styles={css.iconFilter}
                />
                <span>{sign}</span>
              </Button>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
