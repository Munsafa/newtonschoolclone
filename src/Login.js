import React,{useState} from "react";
import { useForm } from "react-hook-form";
import "./Login.css"
export default function Login() {
    const [mobile,setMobile]= useState(false)
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {console.log(data)
    {register("")}
    };
    const handleMobile = ()=> {
        setMobile(true)
    }
    const handleEmail = () => {
        setMobile(false)
    }
    return (
        <div className="maindiv">
        <p>Login to your Account</p>
        <div className="email-mobile">
            <button onClick={handleEmail}>Email</button>
            <button onClick={handleMobile}>Mobile</button>
        </div>
            {mobile ? <form className="email-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="number" innerRef={register} placeholder="Enter Number" />
                <button className='submitbtn' type="submit" >Submit</button>
            </form> : <form className="email-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="email" innerRef={register} placeholder="Enter Email" />
                <input type="password" name="password" innerRef={register} placeholder="Enter Password" />
                <button className='submitbtn' type="submit" >Submit</button>
            </form>  }
        </div>
    );
}