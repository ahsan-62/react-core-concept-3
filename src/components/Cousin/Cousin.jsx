import { useContext } from "react";
import { AssetContext, BalanceCount } from "../Grandpa/Grandpa";

const Cousin = ({name, asset}) => {

    const assetValue=useContext(AssetContext);

    const [money,setMoney] =useContext(BalanceCount)
    return (
        <div>
            <section>
                <p>{name}</p>  
            </section>

            {name==='Jony' && <div>
                <p>Grandpa has: {assetValue}</p>
                <p>Has: {asset}</p>
            <p>Total Balance: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add Money</button>
            </div>}

        </div>
    );
};

export default Cousin;