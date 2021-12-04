import styled from "styled-components";

export const Container = styled.div`
    background:var(--dark-color-footer);
    width:100%;
    display: flex;
    height: 450px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
export const Cont = styled.div`
    background:var(--dark-color-footer);
    width:100%;
    max-width: 1440px;
    display: flex;
    height: 100%;
`

export const Left = styled.div`
    flex:1;
    display: flex;
    height: 100%;
    flex-direction:column;
    justify-content: center;
    position: relative;
    img.logo{
        width: 100px;
        position: absolute;
        top: 60px;
    }
`
export const List = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    padding-top: 165px;
`
export const ItemList = styled.li`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    color:var(--white-color);
    img{
        width:27px;
    }
   
`
export const Midlle = styled.div`
    flex:1;
    display: flex;
    height: 100%;
`
export const Right = styled.div`
    flex:1;
    display: flex;
    height: 100%;
`
export const Bottom = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
`
