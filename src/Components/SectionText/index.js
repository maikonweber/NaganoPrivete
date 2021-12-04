import Link from "next/link"
import {Container,Cont,Text,Title, Left, Right,ContImage} from "./styled"

function SectionText({title,text,image,order}) {
    return (
        <Container >
           <Cont>
               <Left order={order}>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
               </Left>
               <Right  order={order}>
                    <ContImage order={order}>
                        <img src={image}/>
                    </ContImage>
               </Right>
           </Cont>
        </Container>
    )
}

export default SectionText
