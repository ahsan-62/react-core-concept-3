import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
        <h3>Uncle</h3>
        <Cousin name={'Jony'} asset={asset}></Cousin>
        <Cousin name={'Tom'}></Cousin>
        </div>
    );
};

export default Uncle;