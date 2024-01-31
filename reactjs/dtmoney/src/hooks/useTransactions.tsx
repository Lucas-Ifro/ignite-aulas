import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number,
    titulo: string,
    type: string,
    valor: number,
    categoria: string,
    createdAt: string,
}

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContexData{
    transactions: Transaction[];
    createtransaction: (Transaction: transactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContexData>(
    {} as TransactionsContexData
);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createtransaction(transactionInput: transactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date
        })
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createtransaction }}>
            {children}
        </TransactionsContext.Provider>
    );

}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context
}