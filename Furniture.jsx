import React from "react";
import { furnitureData } from "./data/furniture";

const Furniture = () =>{

    const firstFiveImages = furnitureData.slice(0,5)
    return(
       <>
        <div className="proTitle">
            <h1>Furniture</h1>
        </div>
       <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                        <div className="imgBox">
                            <img className="proImage" src={item.image} alt=""/>
                        </div>
                    )
                })
            }
        </div>
       </>
    )
}
export default Furniture;