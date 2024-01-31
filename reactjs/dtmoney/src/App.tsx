import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";
import { Deshboard } from "./components/Dashboard/index"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    
    <Deshboard/>

    <NewTransactionModal 
    isopen = {isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    />

    <GlobalStyle/>
    </TransactionsProvider>
  );
}


