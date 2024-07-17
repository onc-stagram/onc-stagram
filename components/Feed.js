import Posts from "./Posts";
import Stories from "./Stories";
import styles from "../Assets/Feed.module.css";

function Feed() {
  return (
    <main className="grid grid-col-1 md:grid-cols-3 md:max-w-6xl mx-atuto">
      <section className="md:col-span-2">
        <Stories />
        {/* Posts */}
        <Posts/>
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;