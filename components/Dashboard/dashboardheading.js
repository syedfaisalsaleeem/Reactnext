import React from 'react'
class Dashboardheading extends React.Component{
    constructor(props){
        super()

    }
render(){
    return(
        <div className="main">
            <div className="heading">
                <div className="headingin">
                    <div className="in1">
                        <div className="in11">
                        <h1>Dashboard</h1>
                        </div>
                        <div className="in12">
                        <p> Organization name: Demo Account<br/>
                         Your previous login: 26/05/2020 at 16:04</p>
                         </div>          
                    </div>
                    <div className="in2">
                        
                        <p> <b><small>Download as PDF</small></b></p>
                        
                    </div>
                </div>
            </div>
        
        <style jsx>{`
        .main{
            width:100%;
        }
        .heading{
            display:flex;
            
            align-items:center;
            justify-content:center;
            margin-top:160px;
            width:100%;
        }
        .headingin{
            display:flex;
            width:85%;
            
            height:200px;
        }
        .in1{
            display:flex;
            flex-direction:column;
            align-items: flex-start;
            width:50%;
            height:100%;
            
        }
        .in12{
            margin-top:0px;
        }
        .in2{
            display:flex;
            width:50%;
            align-items:center;
            justify-content:flex-end;
            
            height:100%;
            

        }
        @media (max-width: 1440px) {
            .headingin{
                display:flex;
                flex-direction:column;
                width:90%;
                
                height:300px;
            }
            .in2{
                display:flex;
                width:100%;
                align-items:center;
                justify-content:flex-end;
                
                height:100%;
                
    
            }
        }
        @media (max-width: 400px) {
            .headingin{
                display:flex;
                flex-direction:column;
                width:90%;
                
                height:350px;
            }

        }
        
        
        
        `}

        </style>
        
        
        
        
        </div>
    )


    }



}
export default Dashboardheading;