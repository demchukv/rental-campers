import { Helmet } from 'react-helmet-async';
import img from '../assets/campers1.jpg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Rental-Camper: Your Ideal Vacation on Wheels</title>
        <meta
          name="keywords"
          content="camper rentals, vacation houses on wheels, test drive campers"
        />
        <meta
          name="description"
          content="Explore our comfortable camper rentals for unforgettable vacations. Our houses on wheels come equipped with kitchens, sleeping units, and heating. Whether you’re considering buying a camper or just want a test drive, Rental-Camper has you covered! 🚐✨"
        />
      </Helmet>
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
    </main>
  );
};

export default HomePage;
