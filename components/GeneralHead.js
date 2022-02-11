import Head from "next/head";
export default function GeneralHead({ title, description = "" }) {
  return (
    <Head>
      <title>{title} - creationbois.ch</title>
      <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      <meta name="description" content={description}></meta>
    </Head>
  );
}
