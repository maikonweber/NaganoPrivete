import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding: 80px 0;
`

export const Cont = styled.div`
        display: flex;
        width: 100%;
        max-width: 1440px;
        height: 100%;
`

export const Left = styled.div`
        flex:1;
        display: flex;
        align-items: ${p=> {return p.order === "normal" ? "flex-start" : "flex-end"}};
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 1440px;
        height: 100%;
        order: ${p=> { return p.order === "normal"  ? 1 : 2}};
        
`
export const Title = styled.h2`
        font-size: 4rem;
        font-weight: bold;
        width: 600px;
        margin-bottom: 10px;
        color: var(--primary-color);
`
export const Text = styled.p`
        font-size: 1.3rem;
        width: 600px;
        color: var(--primary-color);

`

export const Right = styled.div`
        flex:1;
        display: flex;
        justify-content: ${p=> {return p.order === "normal" ? "flex-end" : "flex-start"}};
        width: 100%;
        max-width: 1440px;
        height: 100%;
        order: ${p=> {return p.order === "normal" ? 2 : 1}};

`

export const ContImage = styled.div`
        position: relative;
        border-radius: 40px;
        z-index: 2;
        background: var(--secondary-color);
        img{   
           position: relative;
           left: ${p=> {return p.order === "normal" ? "-40px" : "40px"}};
           top:  -50px;
           border-radius: 40px;
           display: block;
           overflow: hidden;
           z-index: 3;
        }

        &::before{
          content: "";
          height: 100%;
          width: 100%;
          display: block;
          background: linear-gradient(121.22deg, #1BD3EB 10.66%, #1E8B99 92.42%);
          border-radius: 30px;
          position: absolute;
          z-index: 1;
          top:  -20px;
          left: ${p=> {return p.order === "normal" ? "-20px" : "20px"}};
        }
`
