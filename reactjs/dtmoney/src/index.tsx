import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          titulo: "WebSite",
          type:"deposit",
          valor: 1000.00,
          categoria: 'Venda',
          createdAt: new Date('2021-02-19 09:40:10')
        },
        {
          id: 2,
          titulo: "Aluguel",
          type:"withdraw",
          valor: 1000.00,
          categoria: 'Pagamento',
          createdAt: new Date('2021-02-05 09:40:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')

    })

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)
      
      return schema.create('transaction', data)
    })

  }
  
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
