import useStateHook from "../../hooks/useStateHook";


const CustomHook = () => {

    const onChangeHandle=useStateHook('ahsan@gmail.com');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(onChangeHandle.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit} >

                <p>Enter Your Name</p>
                <input type="text" name="name" id="" />
                <p>Enter Your Email</p>
                <input {...onChangeHandle}  type="email" name="email" id="" />
                <p>Enter Your Number</p>
                <input  type="number" name="number" id="" />
                <br />
                <button type="submit"  >Submit</button> 

            </form>
            
        </div>
    );
};

export default CustomHook;