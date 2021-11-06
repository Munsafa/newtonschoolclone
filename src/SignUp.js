import React from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css"
                                        
function SignUp() {
    const onSubmit = data => {
        console.log(data)
};
    const { register, handleSubmit} = useForm();
    return (
        <div className="signup-maindiv">
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="signup-inputdivs">
                    <label htmlFor="fname">Full Name<>*</></label>
                    <input type="text" name="fname" innerRef={register} />
                </div>
                <div className="signup-inputdivs">
                    <div className="signup-inputdivs">
                        <label htmlFor="fname">Gendar<>*</></label>
                        <select innerRef={register}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="fname">Date of Birth<>*</></label>
                        <input type="date" name="fname" innerRef={register} />
                    </div>
                </div>
                <div className="signup-inputdivs">
                    <label htmlFor="email">Email<>*</></label>
                    <input type="eamil" name="email" innerRef={register} />
                </div>
                <button className='submitbtn' type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default SignUp
