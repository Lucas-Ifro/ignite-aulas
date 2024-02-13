import { GetStaticProps } from "next";
import Head from "next/head"
import styles from './Home.module.scss'
import { SubscribeButton } from "../componests/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  
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
          <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>

      <img src="/imagens/avatar.svg" alt="Mulher programando" />

    </main>
    </>
  );
}

export const  getStaticProps: GetStaticProps = async () =>{
    const price = await stripe.prices.retrieve('price_1OfpRJBRH5HNRvXTicKE5f37')

    const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100),
    }

    return{
      props:{
        product,
      },
      revalidate: 60 * 60 * 24, // 24horas
    }


}
