import React,{useState} from "react";
import Style from "../styles/login.module.css";
import {RiEyeCloseLine,RiEyeLine} from "react-icons/ri"
import { loginIn } from '../src/services/services';
// Sing in form with styled components

 

const Login = () => {
    const [password, setPassword] = useState('');
    const [show,setShow] = useState(false);
    const [email, setEmail] = useState('');    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email != '' && password != '')  {
           console.log(email,password)    
           const token = await loginIn(email,password)          
           } else {
            alert('Email ou senha incorretos')     
           }  
       }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
            <div className={Style.container}>
                <form  className={Style.formulario} onSubmit={(e)=>handleSubmit(e)} >
                    <strong  className={Style.title}>Login</strong>
                    <label  className={Style.label}>
                    Email:
                    <input  className={Style.input} type="text" onChange={handleEmail} />
                    </label>
                    <label  className={Style.label}>
                    Password:
                    <input  className={Style.input} type={show ? "text":"password"} onChange={handlePassword} />
                    <div  className={Style.contEye} onClick={()=>setShow(!show)}>
                        {show 
                        ? <RiEyeLine size={20}/>
                        :<RiEyeCloseLine size={20}/>
                        }
                    </div>
                    </label>

                    <button   className={Style.button} type="send" >
                        Entar
                    </button >
                </form>
            </div>

        );
}

export default Login;