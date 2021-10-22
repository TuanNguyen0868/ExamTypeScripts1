import React, { useState } from 'react';

export default function Login() {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
    })
    const handleFirstName = (event) => {
        setValues({...values, firstName: event.target.value})
    }
    const handleLastName = (event) => {
        setValues({...values, lastName: event.target.value})
    }
    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }
    const [submited, setSubmited] = useState(false)
    const [valid, setValid] = useState(false)
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true)
        }
        setSubmited(true)
    }
    return (
        <div className="form-container">    
            <form className="register-form-rg" onSubmit={handleSubmit}>
                {submited && valid ? <p className='success-message'>Success !! Thanks for Register</p> : null}
                <input
                    onChange={handleFirstName}
                    value={values.firstName}
                    type="text"
                    className="fom-field-rg"
                    placeholder="FirstName"
                >
                </input>
                <br></br>
                {submited && !values.firstName ? <span>Please enter FirstName</span> : null}
                <br></br>
                <input
                    onChange={handleLastName}
                    value={values.lastName}
                    type="text"
                    className="fom-field-rg"
                    placeholder="LastName"
                >
                </input>
                <br></br>
                {submited && !values.lastName ? <span>Please enter LastName</span> : null}
                <br></br>
                <input
                    onChange={handleEmail}
                    value={values.email}
                    type="email"
                    className="fom-field-rg"
                    placeholder="Your Mail"
                >
                </input>
                <br></br>
                {submited && !values.email ? <span>Please enter Email</span> : null}
                <br></br>
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </form>
            
        </div>
    )
}
