import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={({ isActive }) => [isActive && styles.active].join("")} to='/'>Все котики</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={({ isActive }) => [isActive && styles.active].join("")} to='/favorites'>Любимые котики</NavLink>
        </li>
      </ul>
    </nav>
  );
};