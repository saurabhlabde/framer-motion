import Head from "next/head";

interface IHeading {
  title: string;
}

export const HeadTag: React.FC<IHeading> = ({ title }) => {
  const titleCapitalize = title.replace(/\b[a-z]/g, (match) =>
    match.toUpperCase()
  );

  return (
    <Head>
      <title>{`${titleCapitalize} ${title && "|"}`} Framer Motion</title>

      <meta name="description" content="framer motion projects" />
      <link
        rel="icon"
        href="	https://external-content.duckduckgo.com/ip3/www.framer.com.ico"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
