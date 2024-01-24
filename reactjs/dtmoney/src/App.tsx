import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";
import {Deshboard} from "./components/Dashboard/index"
import { useState } from "react";
import Modal from 'react-modal'

Modal.setAppElement('root');

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

    <Modal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      >
          <h2>cadastrar Transação</h2>
    </Modal>

    <GlobalStyle/>
    </>
  );
}


