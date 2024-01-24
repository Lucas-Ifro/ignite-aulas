import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Desenvolvimento de Software</td>
                        <td className="deposito">R$12.000,00</td>
                        <td>Venda</td>
                        <td>23/01/2024</td>
                    </tr>

                    <tr>
                        <td>aluguel</td>
                        <td className="retirada">-R$1.100,00</td>
                        <td>Pagamento</td>
                        <td>23/01/2024</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}