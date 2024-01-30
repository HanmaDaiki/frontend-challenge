import { useEffect, useState } from "react";
import { Like } from "@features/like";
import { Cat, catSelector, addToFavorites, removeFromFavorites } from "@entities/cat";
import { useAppSelector, useAppDispatch } from "@shared/model/hooks";
import styles from "./CardLayout.module.scss";

type Props = {
  cat: Cat;
};

export const CardLayout = ({ cat }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const { favorites } = useAppSelector(catSelector);

  const dispatch = useAppDispatch();

  const handleLike = () => {
    if(!isFavorite) {
      dispatch(addToFavorites(cat));
      return;
    }

    dispatch(removeFromFavorites(cat));
  }

  useEffect(() => {
    setFavorite(favorites.includes(cat));
  }, []);

  useEffect(() => {
    setFavorite(favorites.includes(cat));

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  return (
    <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img
        src={cat.url}
        className={styles.img}
        alt={`img from api cat. id: ${cat.id}`}
      />
      
      {
        hover && <Like toggle={handleLike} active={isFavorite} />
      } 
    </div>
  );
};
