import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import fecharImg from "../../assets/fechar.svg";
import entradaImg from "../../assets/entrada.svg";
import saidaImg from "../../assets/saida.svg";
import { useState } from 'react';

interface NewTransactionModalProps{
    isopen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isopen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');

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
                    <RadioBox
                    type='button'
                    onClick={()=>{ setType("deposit") }}
                    isActive={type === "deposit"}
                    activeColor = 'green'
                    >
                        <img src={entradaImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type='button'
                    onClick={()=>{ setType("withdraw") }}
                    isActive={type === "withdraw"}
                    activeColor = "red"
                    >
                        <img src={saidaImg} alt="" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer> 

            <input type="button" value="Cadastrar" />
        </Container>
    </Modal>

 )
}