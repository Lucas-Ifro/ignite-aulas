import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";
import { Deshboard } from "./components/Dashboard/index"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import Modal from 'react-modal'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Deshboard/>
    <NewTransactionModal 
    isopen = {isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    />
    <GlobalStyle/>
    </>
  );
}


