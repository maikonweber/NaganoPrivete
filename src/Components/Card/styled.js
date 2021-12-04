import styled from "styled-components";

export const Container = styled.div`
    background:var(--white-color);
    width:100%;
    max-width: 420px;
    border-radius: 10px;
    padding: 60px 4.7rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 450px;
    
`

export const Cont = styled.div`
        display: flex;
        width: 100%;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 70px;
            display: flex;
        }
`
export const Title = styled.strong`
        text-align: center;
        font-size: 20px;
        color:var(--secondary-color);
        cursor:pointer;
`


export const Text = styled.span`
        text-align: center;
        color:var(--secondary-color);
        cursor:pointer;
`

export const Button = styled.button`
        background:var(--primary-color);
        color:var(--secondary-color);
        font-size: 22px;
        font-weight: bold;
        box-shadow: 8px 8px 10px #CCC;
        width: 100%;
        padding: 10px 0;
        border-radius: 50px;
        &:active{
             background: "var(--primary-color-active)" 
        } 
        
        &:hover{ 
            background: "var(--primary-color-hover)"
        }
`