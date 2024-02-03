import Head from "next/head"
import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
    <title>Home | ig.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News abaut the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </section>

      <img src="/imagens/avatar.svg" alt="Mulher programando" />

    </main>
    </>
  );
}
