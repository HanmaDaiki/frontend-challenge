// import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// const MainPage = lazy(() => import('./MainPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<div>MainPage</div>} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  );
};