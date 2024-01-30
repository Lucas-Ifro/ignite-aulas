import {  Children, ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number,
    titulo: string,
    type: string,
    valor: number,
    categoria: string,
    createdAt: string,
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return(
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );

}