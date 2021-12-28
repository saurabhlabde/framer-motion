import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// component
import { HeadTag } from "../src/components/Heading";
import { Button } from "../src/basic-animation/components/Button";
import { H1 } from "../src/components/H1";

const BasicAnimation = () => {
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
        <H1 title="basic button" />
        <Button />

        <H1 title="basic button" />
        <Button />
      </main>
    </div>
  );
};

export default BasicAnimation;
