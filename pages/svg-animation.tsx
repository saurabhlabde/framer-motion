import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// component
import { HeadTag } from "../src/components/Heading";

export const SvgAnimationPage = () => {
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
      ></main>
    </div>
  );
};

export default SvgAnimationPage;
