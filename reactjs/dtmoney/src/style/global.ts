import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #fff;
}

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

}
html{
    @media (max-width: 1080px){
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
        font-size: 87.5%; //14px 
    }
}

body{
    background-color: var(--background);
    -webkit-font-soomthing: antialiased;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`