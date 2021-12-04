import styled from "styled-components";

export const Container = styled.div`
        background:var(--secondary-color);
        width:100%;
        height: 100vh;
        display: flex;
        margin-top: 80px;
        align-items: center;
        flex-direction: column;
        position: relative;
        
        img.bg{
                position: absolute;
                right: 0;
                bottom: 0;
        }
`

export const Cont = styled.div`
        width:100%;
        max-width: 1440px;
        height: 100%;
        display: flex;
`
export const Left = styled.div`
        width:100%;
        max-width: 1440px;
        height: 100%;
        display: flex;
        align-items: center;
`

export const Title = styled.div`
        width:100%;
        padding: 60px;
        font-weight: bold;
        font-size: 2.9rem;
        color: var(--primary-color);
        text-align: center;
`
export const ContImage = styled.div`
        width: 500px;
        height: 500px;
        background-color: red;
        border-radius: 50%;
        position: relative;
        background: linear-gradient(132.16deg, #1BD3EB 43.33%, #1E8B99 88.35%);
        img{
                position: absolute;
                left: 80px;
                top: -60px;
                display: block;
        }

        &::before{
                content: "";
                position: absolute;
                background: linear-gradient(132.16deg, #1BD3EB 43.33%, #1E8B99 88.35%);
                width: 80px;
                height: 80px;
                display: block;
                border-radius: 10px;
                transform: rotate(30deg);
                top: -80px;
                left: 40px;
        }

        &::after{
                content: "";
                position: absolute;
                background: linear-gradient(132.16deg, #1BD3EB 43.33%, #1E8B99 88.35%);
                width: 80px;
                height: 80px;
                display: block;
                border-radius: 10px;
                transform: rotate(30deg);
                bottom: 110px;
                right: -50px;
        }
`
export const Right = styled.div`
        width:100%;
        max-width: 1440px;
        height: 100%;
        display: flex;
        flex-direction: column;
`

export const TitleName = styled.strong`
        font-size: 60px;
        color: var(--white-color);
        margin: 60px 0 30px 0;
`
export const Text = styled.p`
        font-size: 1.2rem;
        color: var(--white-color);
        height: 150px;

`
export const TabsCont = styled.p`
        width: 100%;
        padding: 30px 0;
        display: flex;
        gap: 20px;
`
export const Tabs = styled.p`
       width: 40px;
       height: 4px;
       background-color: var(--primary-color);

`
