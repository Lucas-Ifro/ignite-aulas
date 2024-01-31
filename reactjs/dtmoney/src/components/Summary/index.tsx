import { Container } from "./styles"
import entradaImg from "../../assets/entrada.svg"
import saidaImg from "../../assets/saida.svg"
import sifraoImg from "../../assets/sifrao.svg"
import {  useTransactions } from "../../hooks/useTransactions"

export function Summary(){
    const {transactions} = useTransactions();
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit' ){
            acc.deposits += transaction.valor;
            acc.total += transaction.valor
            
        }else{
            acc.withdraws += transaction.valor;
            acc.total -= transaction.valor;
        }

        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    Entradas
                    <img src={entradaImg} alt="Entrada" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',   
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    Saídas
                    <img src={saidaImg} alt="Saídas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',   
                    }).format(summary.withdraws)}
                    
                </strong>
            </div>

            <div className="background-total">
                <header>
                    Total
                    <img src={sifraoImg} alt="Total movimentado" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',   
                        }).format(summary.total)}
                    
                </strong>
            </div>

        </Container>

    )
}