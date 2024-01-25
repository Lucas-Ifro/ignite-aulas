import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import fecharImg from "../../assets/fechar.svg";
import entradaImg from "../../assets/entrada.svg";
import saidaImg from "../../assets/saida.svg";

interface NewTransactionModalProps{
    isopen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isopen, onRequestClose}: NewTransactionModalProps){
    return(
    <Modal 
      isOpen={isopen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      >
        <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
        >
            <img src={fecharImg} alt="Fechar modal" />
        </button>
        
        <Container>
          <h2>Cadastrar Transação</h2>
            
            <input type="text" name="" id="" placeholder='Título'/>
            <input type="number" name="" id="" placeholder='Valor'/>
            <input type="text" name="" id="" placeholder='Categoria'/>

                <TransactionTypeContainer>
                    <button
                    type='button'>
                        <img src={entradaImg} alt="" />
                        <span>Entrada</span>
                    </button>

                    <button
                    type='button'>
                        <img src={saidaImg} alt="" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

            <input type="button" value="Cadastrar" />
        </Container>
    </Modal>

 )
}