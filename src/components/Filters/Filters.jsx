import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import { getFilters } from '../../store/camper/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../store/camper/selectors';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
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
    const name = event.target.name;
    const value =
      event.target.value === event.target.name
        ? event.target.checked
        : event.target.value;
    dispatch(getFilters({ name, value }));
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
            value={filters?.location}
            onChange={handleClick}
          />
        </div>
      </div>

      <div className={css.locationLabel}>Filters</div>
      <div className={css.filterBlock}>
        <p className={css.filterGroup}>Vehicle equipment</p>
        <div className={css.filters}>
          {equipmentFilterIcon.map(({ name, icon, sign }) => (
            <div key={name}>
              <input
                className={css.filtrInput}
                type="checkbox"
                name={name}
                value={name}
                id={name}
                defaultChecked={filters[name] ? true : false}
                onClick={() => handleClick()}
              />
              <label htmlFor={name} className={css.filtrInputLabel}>
                <div className={css.filterInputContent}>
                  <Icon
                    width={24}
                    height={24}
                    iconName={icon}
                    styles={css.iconFilter}
                  />
                  <span>{sign}</span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={css.filterBlock}>
        <p className={css.filterGroup}>Vehicle type</p>
        <div className={css.filters}>
          {typeFilterIcon.map(({ value, icon, sign }) => (
            <div key={value}>
              <input
                className={css.filtrInput}
                type="radio"
                name="type"
                id={`type-${value}`}
                value={value}
                defaultChecked={filters['type'] === value ? true : false}
                onClick={() => handleClick()}
              />
              <label htmlFor={`type-${value}`} className={css.filtrInputLabel}>
                <div className={css.filterInputContent}>
                  <Icon
                    width={24}
                    height={24}
                    iconName={icon}
                    styles={css.iconFilter}
                  />
                  <span>{sign}</span>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
