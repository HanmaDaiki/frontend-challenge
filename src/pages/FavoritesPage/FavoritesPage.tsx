import { catSelector } from '@entities/cat';
import { useAppSelector } from '@shared/model/hooks';
import styles from './FavoritesPage.module.scss';
import { CardLayout } from '@/src/widgets/CardLayout';

export default function FavoritesPage() {
  const { favorites } = useAppSelector(catSelector);

  return (
    <main className={styles.favorites}>
      <section className={styles.cats}>
        {
          favorites.map((cat, index) => <CardLayout key={cat.id + index} cat={cat} />)
        }
      </section>
    </main>
  );
}