import React,{useState} from "react";
import Style from "../styles/login.module.css";
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
            <div className={Style.container}>
                <form  className={Style.formulario} onSubmit={(e)=>handleSubmit(e)} >
                    <strong  className={Style.title}>Login</strong>
                    <label  className={Style.label}>
                    Email:
                    <input  className={Style.input} type="text" />
                    </label>
                    <label  className={Style.label}>
                    Password:
                    <input  className={Style.input} type={show ? "text":"password"} />
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