import { Navigation } from '@features/navigation'
import styles from './HeaderLayout.module.scss';

export const HeaderLayout = () => {
  return(
    <header className={styles.header}>
      <Navigation />
    </header>
  )
}
