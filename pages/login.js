import React,{useState} from "react";
import Topbar from "../src/Components/Topbar/index";
import {Container,Title,Formulario,Input,Button,Label,ContEye} from "../styles/loginStyled";
import {RiEyeCloseLine,RiEyeLine} from "react-icons/ri"
// Sing in form with styled components

  const handleSubmit = (e) => {
         e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }

const Login = () => {
    const [show,setShow] = useState(false);
        return (
            <Container>
                <Formulario onSubmit={(e)=>handleSubmit(e)} >
                    <Title>Login</Title>
                    <Label>
                    Email:
                    <Input type="text" />
                    </Label>
                    <Label>
                    Password:
                    <Input type={show ? "text":"password"} />
                    <ContEye onClick={()=>setShow(!show)}>
                        {show 
                        ? <RiEyeLine size={20}/>
                        :<RiEyeCloseLine size={20}/>
                        }
                    </ContEye>
                    </Label>

                    <Button type="send" >
                        Entar
                    </Button>
                </Formulario>
            </Container>

        );
}

export default Login;