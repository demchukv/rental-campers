import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import '@fontsource/inter';
import './App.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/catalog" element={<CatalogPage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
