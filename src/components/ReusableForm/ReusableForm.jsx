import propTypes from 'prop-types'

const ReusableForm = ({children,submitBtn="Submit",handleSubmit}) => {

    const handleSubmitAll=e=>{

        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            number:e.target.number.value
        }
        handleSubmit(data);
    }

    
    return (
        <div>

            {children}
                <form onSubmit={handleSubmitAll}>
                <p>Enter Your Name</p>
                <input type="text" name="name" id="" />
                <p>Enter Your Email</p>
                <input type="email" name="email" id="" />
                <p>Enter Your Number</p>
                <input  type="number" name="number" id="" />
                <br />
                <button type="submit"  >{submitBtn}</button> 

                </form>
        </div>
    );
};

ReusableForm.propTypes = {
    text:propTypes.string,
    handleSubmit:propTypes.func,
    submitBtn:propTypes.string,
    children:propTypes.node
}

export default ReusableForm;