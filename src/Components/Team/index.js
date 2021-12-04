import Link from "next/link"
import {Container,Cont,TabsCont,Tabs,Title,Right,Left,ContImage,Text,TitleName} from "./styled"
function Team({img}) {
    return (
        <Container >
            <Title>Our Team</Title>
           <Cont>
                <Left>
                    <ContImage>
                        <img src="/people.png" alt="26565"/>
                    </ContImage>
                </Left>
                <Right>
                    <TitleName>Julia Martins</TitleName>
                    <Text>
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Text>
                    <TabsCont>
                        <Tabs/>
                        <Tabs/>
                        <Tabs/>
                    </TabsCont>
                </Right>
           </Cont>
           <img className="bg" src="/bg.png" alt="26565"/>
           
        </Container>
    )
}

export default Team
