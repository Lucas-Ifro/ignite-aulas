import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import fecharImg from "../../assets/fechar.svg";
import entradaImg from "../../assets/entrada.svg";
import saidaImg from "../../assets/saida.svg";
import { useState, FormEvent } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
    isopen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isopen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data ={
            titulo
            ,valor
            ,categoria
            ,type
        }
        api.post('/transactions', data)

        
    }

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
        
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
            
            <input 
            type="text"  
            placeholder='Título'
            value = {titulo}
            onChange={event => setTitulo(event.target.value)}
            />
            <input 
            type="number"  
            placeholder='Valor'
            value = {valor}
            onChange={event => setValor(Number(event.target.value))}

            />
            <input 
            type="text"  
            placeholder='Categoria'
            value = {categoria}
            onChange={event => setCategoria(event.target.value)}
            
            />

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={()=>{ setType("deposit") }}
                    isactive={type === "deposit"}
                    activecolor = 'green'
                    >
                        <img src={entradaImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type='button'
                    onClick={()=>{ setType("withdraw") }}
                    isactive={type === "withdraw"}
                    activecolor = "red"
                    >
                        <img src={saidaImg} alt="" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer> 

            <input type="submit" value="Cadastrar" />
        </Container>
    </Modal>

 )
}