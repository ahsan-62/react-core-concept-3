import Dad from "../Dad/Dad";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
import { createContext, useState } from "react";

export const AssetContext=createContext('Cromium Ring');

export const BalanceCount=createContext(0);


const Grandpa = () => {

    // const property=[
    //     {
    //         name:'Ahsan Al Bashar',
    //         age:27,
    //         institution:'Pabna University Of Science and Technology'
    //     },
    //     {
    //         name:'Shihab Arefin',
    //         age:27,
    //         institution:'Bangladesh University'
    //     }
    // ]

    const asset='Diamond Ring';

   //use Api Context with state to avoid Props Driling

  const [money,setMoney] =useState(10000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
          <BalanceCount.Provider value={[money,setMoney]}>  
            <AssetContext.Provider value={'Cromium Ring'}>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </AssetContext.Provider>
           </BalanceCount.Provider> 
        </div>
    );
};

export default Grandpa;
