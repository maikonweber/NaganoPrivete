import Link from "next/link"
import {Container,Cont,Text,Button,Title} from "./styled"
function Card({img,title,text}) {
    return (
        <Container >
            <Title>{title}</Title>
           <Cont>
                <img src={img} alt={title}/>
           </Cont>
           <Cont>
                <Text>{text}</Text>
           </Cont>
           <Link href="/"><Button>Simule</Button></Link>
        </Container>
    )
}

export default Card
