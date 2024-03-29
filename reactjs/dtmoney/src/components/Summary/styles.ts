import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -6rem;

    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 2rem;

            &.saida{
                color: var(--red);
                opacity: 70%;
            }
            
        }

        &.background-total{
            background-color: var(--green);
            color: #fff;
        }
    }
`