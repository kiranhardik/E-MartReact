import React from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../Navbar";

const FridgeDataPage = () =>{
    return(
       <>
       <Navbar/>
       
        <div className="pageSection">
            {fridgeData.map((item)=>{
                return(
                    <div>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="proModel">
                            {item.company},{item.model}
                        </div>
                    </div>
                )
            })}
        </div>
       </>
    )
}
export default FridgeDataPage;