import { Container } from "./styles"
import entradaImg from "../../assets/entrada.svg"
import saidaImg from "../../assets/saida.svg"
import sifraoImg from "../../assets/sifrao.svg"
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"

export function Summary(){
    const {transactions} = useContext(TransactionsContext)
    
    return(
        <Container>
            <div>
                <header>
                    Entradas
                    <img src={entradaImg} alt="Entrada" />
                </header>
                <strong>1000.00</strong>
            </div>

            <div>
                <header>
                    Saídas
                    <img src={saidaImg} alt="Saídas" />
                </header>
                <strong>500.00</strong>
            </div>

            <div className="background-total">
                <header>
                    Total
                    <img src={sifraoImg} alt="Total movimentado" />
                </header>
                <strong>500.00</strong>
            </div>

        </Container>

    )
}