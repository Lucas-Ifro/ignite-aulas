import { NextApiRequest, NextApiResponse } from "next";
import {query as q} from 'faunadb'
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { stripe } from "../../services/stripe";

type user = {
    ref:{
        id: string
    }
}


export default async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method === 'POST'){
        const session = await getSession({ req })

        //verifica se session é null
        if (!session) {
            return res.status(401).json({ error: 'Session not found' });
        }
        
        const userEmail = session.user?.email;

        //verifica se userEmail é null
        if (!userEmail) {
            return res.status(401).json({ error: 'User email not found' });
        }

        
        const user = await fauna.query<user>(
            q.Get(
                q.Match(
                    q.Index('user_email'),
                        q.Casefold(userEmail)
                )
            )
        )

        const stripeCustomer = await stripe.customers.create({
            email: userEmail,
            
        })

        
        await fauna.query(
            q.Update(
                q.Ref(q.Collection('users'), user.ref.id),
                {
                    data: {
                        stripe_customer_id: stripeCustomer.id
                    }
                }
            )
        )

        const stripeCheckouSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ["card"],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1OfpRJBRH5HNRvXTicKE5f37', quantity: 1 }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,

        })

        return res.status(200).json({sessionId: stripeCheckouSession.id})
    }else{
        res.setHeader('allow', "POST")
        res.status(405).end('Method not allowed')
    }
}