import logoimg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal : () => void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoimg} alt="dt money" />
                <input type="button" id='button' value="Nova Transação" onClick={onOpenNewTransactionModal}/>

            </Content>
        </Container>
    )

}
