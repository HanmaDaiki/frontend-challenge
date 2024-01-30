import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const FavoritesPage = lazy(() => import('./FavoritesPage/FavoritesPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  );
};