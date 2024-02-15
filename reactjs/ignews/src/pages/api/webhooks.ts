import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";

async function buffer(Readable: Readable){
    const chunks = [];

    for await (const chunk of Readable){
        chunks.push(
            typeof chunk === 'string' ? Buffer.from(chunk) : chunk
        );
    }

    return Buffer.concat(chunks);
}

export const config = {
    api: {
        ReportBody: false
    }
}

const relevantEvent = new Set([
    'checkuot.session.completed'
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    if(req.method === 'POST'){
        const buf = await buffer(req)
        const secret = req.headers['stripe-segnature']

        let event: Stripe.Event;

        try{
            event = Stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err){
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        const type = event.type;

        if(relevantEvent.has(type)){
            console.log('evento recebido', type)
        }

        res.json({received: true})
    }else{
        res.setHeader('allow', "POST")
        res.status(405).end('Method not allowed')
    }

}