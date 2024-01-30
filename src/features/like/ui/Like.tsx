import cn from "classnames";
import styles from "./Like.module.scss";

type Props = {
  toggle: () => void;
  active: boolean;
};

export const Like = ({ toggle, active }: Props) => {
  return (
    <button
      onClick={toggle}
      className={cn(styles.like, active && styles.active)}
    >
    </button>
  );
};
