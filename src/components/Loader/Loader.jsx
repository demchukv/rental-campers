import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={css.loader}></div>
      <div className={css.container}></div>
    </>
  );
};

export default Loader;
