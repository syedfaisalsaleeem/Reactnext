import React from 'react';
import Linechart1 from "./linechart1"
class Exposuretrends extends React.Component{
    constructor(){
        super()
    }

render(){
    return(
        <div className="et">
            <div className="et1">
            <p> EXPOSURE TRENDS (LAST 24 MONTHS)</p>
            </div>
            <div className="et2">
                <Linechart1/>
            </div>
        <style jsx>
            {`
            .et{
                display:flex;
                flex-direction:column;
                
                height:100%;
                width:100%;
                
                
            }
            .et1{
                display:flex;
                width:100%;
                height:16%;
                align-items:center;
                justify-content:center;
                font-size:18px;

   
                
            }
            .et2{
                overflow: hidden;
            }

            `}
        </style>
        
        </div>
    )
}
}
export default Exposuretrends;