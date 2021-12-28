import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";

// component
import { HeadTag } from "../src/components/Heading";
import { H1 } from "../src/components/H1";
import { Button } from "../src/basic-animation/components/Button";
import { TextInput } from "../src/basic-animation/components/Input";

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
        <AnimatePresence>
          <H1 title="basic button" />
          <Button />

          <H1 title="basic input" />
          <TextInput />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BasicAnimation;
