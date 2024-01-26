import styled from "styled-components";

import { transparentize } from "polished";

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        background: #e7e9ee;
        border: 1px solid #d7d7d7;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
        margin-top: 1rem;
        }
            &[type="button"]{
            background: var(--green);
            color: white;
            font-weight: 600;

            transition: 200ms filter;
            
            &:hover{
                filter: brightness(0.85);
            }

        }

    }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`
interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: '#E52E4D',
    green: '#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive 
        ? transparentize(0.85,colors[props.activeColor])
        : "transparent"
    };

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 200ms border-color;

        &:hover{
            border-color: #aaa;
    }
        img{
            width: 25px;
            height: 25px;
    }

        span{
            display: inline-block;
            margin-left: .6rem;
            font-size: 1rem;
            color: var(--text-title);
    }
`