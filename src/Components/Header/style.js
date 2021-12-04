import styled from "styled-components";

export const Container = styled.div`
        position:relative;
        background-image: url("/hero.jpg");
        background-size:cover;
        background-position:right;
        background-attachment: fixed;
        background-repeat:no-repeat; 
        height:80vh;
        width:100%;
        display:flex;
        justify-content:center;

`

export const Overlay = styled.div`
        width:100%;
        height:100%;
        left:0;
        top:0;
        position:absolute;
        background:var(--overlay-top);
`

export const BoxTitle = styled.div`
        width:100%;
        max-width:1440px;
        display:flex;
        padding-top: 100px;
`

export const Title = styled.h1`
        z-index:2;
        font-weight:bold;
        font-size:7rem;
        width:800px;
        color:var(--primary-color);
        
`