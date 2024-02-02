import style  from "../styled/home.module.scss"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
    <title>IG.news</title>
    </Head>
    <h1 className={style.title}>
      Hello world
    </h1>
    </>
  );
}
