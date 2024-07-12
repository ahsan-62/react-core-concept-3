import { useState } from 'react'

const StateFulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(email);

        if(password.length<5){
            setError('Password is too short');
        }
        else{
            setError('');
            console.log(password);
        }
        
    }

    const handleEmailChange=e=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }   

    const handlePasswordChange=e=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p>Enter Your Name</p>
                <input type="text" name="name" id="" />
                <p>Enter Your Email</p>
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <p>Enter Your Number</p>
                <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                {error && <p style={{color:'red'}}>{error}</p>}
                <br />
                <button type="submit"  >Submit</button>

            </form>
        </div>
    );
};

export default StateFulForm;