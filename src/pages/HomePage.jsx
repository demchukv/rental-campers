import img from '../assets/campers.jpg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Welcome to Rental-Camper!</h1>
      <p className={css.mainText}>
        We offer comfortable rentals campers for your unforgettable vacation.
        Our houses on wheels equipped with a kitchen, sleeping unit and heating.
        You can rent camper from 2 days to several weeks. If you are considering
        buying a camper, rental is an ideal option for a test drive.
      </p>
      <p className={css.mainText}>
        We invite you to visit our website: Rental-Camper to find out more about
        rental terms and our models of campers. We wish you wonderful travels!
        🚐✨
      </p>
      <div className={css.mainImgContainer}>
        <img src={img} alt="campers" />
      </div>
    </>
  );
};

export default HomePage;
