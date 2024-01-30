import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";


export function TransactionsTable(){
    const {transactions} = useContext(TransactionsContext);

   
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

                    {transactions.map(transaction =>{
                        return(
                        <tr key={transaction.id}>
                            <td>{transaction.titulo}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',

                                }).format(transaction.valor)}
                                
                                </td>
                            <td>{transaction.categoria}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                        
                        );
                    })}

                </tbody>
            </table>
        </Container>
    )
}