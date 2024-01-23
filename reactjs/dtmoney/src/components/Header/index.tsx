import logoimg from '../../assets/Logo.svg'
import { Container, Content } from './styles'
export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoimg} alt="dt money" />
                <input type="button" id='button' value="Nova Transação" />
            </Content>
        </Container>
    )

}
