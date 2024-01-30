import { useEffect, useState } from 'react';
import { CardLayout } from '@/src/widgets/CardLayout';
import { catSelector, loadingCats } from '@entities/cat';
import { useAppDispatch, useAppSelector } from '@shared/model/hooks';
import { Preloader } from '@shared/ui';
import styles from './MainPage.module.scss';

export default function MainPage() {
  const { cats, status } = useAppSelector(catSelector);
  const [page, setPage] = useState<number>(0);

  const dispath = useAppDispatch();

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || status === 'pending') {
      return;
    }

    dispath(loadingCats(page));
    setPage(page + 1);
  }

  useEffect(() => {
    if (cats.length === 0) dispath(loadingCats(page));
    setPage(page + 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [status]);

  return (
    <main className={styles.main}>

      <section className={styles.cats}>
        {
          cats.map((cat, index) => <CardLayout key={cat.id + index} cat={cat} />)
        }
      </section>


      {
        status === 'pending' &&
        <div className={styles.pending}>
          <Preloader />
        </div>
      }
    </main>
  );
}