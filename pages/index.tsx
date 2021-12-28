import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// components
import { Heading } from "../src/index/components/Heading";
import { ProjectCard } from "../src/index/components/Card";
import { HeadTag } from "../src/components/Heading";

// data
import ProjectData from "../src/index/data/data.json";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <HeadTag title="" />

      <main className={styles.main}>
        <div className={styles.heading_section}>
          <Heading />
        </div>

        <div className={styles.cards_section}>
          {ProjectData.map((item, i) => {
            return (
              <ProjectCard
                title={item.title}
                key={`${i}${item.id}`}
                onClick={() => {
                  router.push(`${item.href}`);
                }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
