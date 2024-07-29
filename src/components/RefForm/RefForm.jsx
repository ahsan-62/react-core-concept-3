import { useRef } from "react";


const RefForm = () => {

    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const numberRef=useRef(null);


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(numberRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p>Enter Your Name</p>
                <input ref={nameRef} type="text" name="name" id="" />
                <p>Enter Your Email</p>
                <input ref={emailRef} type="email" name="email" id="" />
                <p>Enter Your Number</p>
                <input ref={numberRef} type="number" name="number" id="" />
                <br />
                <button type="submit"  >Submit</button> 

            </form>
        </div>
    );
};

export default RefForm;