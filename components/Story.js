import styles from "../Assets/Story.module.css";

export default function Story({ img, username }) {
  return (
    <div className={styles.story}>
      <img src={img} alt={username} className={styles["story-img"]} />
      <p className={styles["story-username"]}>{username}</p>
    </div>
  );
}