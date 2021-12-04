import styled from "styled-components";

export const Container = styled.div`
    background:var(--dark-color);
    width:100%;
    display:flex;
    justify-content:center;
    position: fixed;
    z-index: 22;
    top: 0;
`

export const Nav = styled.nav`
        width:100%;
        max-width:1440px;
        height: 120px;
        padding:15px;
        color:white;
        display:flex;
`

export const Cont = styled.div`
        display: flex;
        width: 100%;
        color: #FFF;
`

export const ContLink = styled.div`
       display:flex;
       flex:1;
       align-items:center;
       justify-content:flex-end;
`

export const Text = styled.span`
        font-weight:bold;
        color:var(--primary-color);
        padding:1.2rem;
        cursor:pointer;
`

export const Button = styled.button`
        background:var(--primary-color);
        color:var(--secondary-color);
        font-weight: bold;
        width: 100px;
        padding: 7px 0;
        border-radius: 7px;
        margin-left: 1.2rem;
        &:active{
             background: "var(--primary-color-active)" 
        } 
        
        &:hover{ 
            background: "var(--primary-color-hover)"
        }
`