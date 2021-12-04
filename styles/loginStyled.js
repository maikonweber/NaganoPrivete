import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-color);
    padding: 20px;
    overflow: hidden;
    position: relative;
`

export const Formulario = styled.form`
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    background-color: #FFF;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 99;
    box-shadow: 10px 10px 10px #1BD3EB29;
        &::before{
            content: "";
            display: block;
            position: absolute;
            left: -200px;
            bottom: -150px;
            transform: rotate(14deg);
            width: 500px;
            height: 500px;
            border-radius: 70px;
            background: linear-gradient(121.22deg, #1BD3EB 10.66%, #1E8B99 92.42%);
        }
        &::after{
            content: "";
            display: block;
            position: absolute;
            right: -200px;
            top: -150px;
            transform: rotate(14deg);
            width: 500px;
            height: 500px;
            border-radius: 70px;
            background: linear-gradient(121.22deg, #1BD3EB 10.66%, #1E8B99 92.42%);
            z-index: 99;
        }
        @media (max-width:1344px){
            padding: 30px;
        &::before{
           display: none;
        }
        &::after{
            display: none;
        }
        }
`

export const Title = styled.h1`
    font-size: 1.9rem;
    text-align: center;
    font-weight: bold;
`


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Button = styled.button`
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background: var(--primary-color);
    border-radius: 90px;
    color: #FFF;
    
`

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
`

export const ContEye = styled.div`
    position: absolute;
    top:38px;
    right: 15px;
    cursor: pointer;
    `
    