import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// component
import { Portfolio } from "../src/portfolio";
import { HeadTag } from "../src/components/Heading";

const PortfolioPage = () => {
  const router = useRouter();

  const activePage = router.pathname.replace(/[/_-]/g, " ");

  return (
    <div className={styles.container}>
      <HeadTag title={`${activePage}`} />

      <main
        className={styles.main}
        style={{
          justifyContent: "center",
        }}
      >
        <Portfolio />
      </main>
    </div>
  );
};

export default PortfolioPage;
