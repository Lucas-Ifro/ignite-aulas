import { useSession, signIn } from 'next-auth/react'
import styles from './styles.module.scss'
import { api } from '@/src/services/api';
import { getStripeJs } from '@/src/services/stripe-js';


interface SubscribeButtonProps {
    priceId: string,

}

export function SubscribeButton({ priceId } : SubscribeButtonProps){
    const { data: session } = useSession();

    async function handleSubescribe(){
        if(!session){
            signIn("github")
            return;
        }

        try{
            const response = await api.post('/subscribe')

            const { sessionId }= response.data;

            const stripe = await getStripeJs()
            

            await stripe?.redirectToCheckout({sessionId: sessionId})
        } catch(err){
            alert("é aqui o erro");
        }
    }

    return(
        <button 
            type="button"
            className={styles.SubscribeButton}
            onClick={handleSubescribe}
        >
            Subscribe now
        </button>

    )
}