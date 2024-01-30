import { useEffect } from 'react';
import { withProviders } from '@app/provider';
import { Routing } from '@pages/index';
import { HeaderLayout } from '@widgets/HeaderLayout';
import { loadingFavorites } from '@entities/cat';
import { useAppDispatch } from '@shared/model/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    dispatch(loadingFavorites(favorites));
  }, [])

  return ( 
    <>
      <HeaderLayout />
      <Routing />
    </>
  );
};

export default withProviders(<App />);
