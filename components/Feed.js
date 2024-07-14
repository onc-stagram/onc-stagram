import Stories from "./Stories";
import styles from "../Assets/Feed.module.css";

function Feed() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Stories />
      </section>

      <section className={styles.section}>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;