

const SimpleForm = () => {

    const handleSubmit=e=>{

        e.preventDefault();

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log('Submited');

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p>Enter Your Name</p>
                <input type="text" name="name" id="" />
                <p>Enter Your Email</p>
                <input type="email" name="email" id="" />
                <p>Enter Your Number</p>
                <input type="number" name="number" id="" />
                <br />
                <button type="submit"  >Submit</button>

            </form>
            
        </div>
    );
};

export default SimpleForm;